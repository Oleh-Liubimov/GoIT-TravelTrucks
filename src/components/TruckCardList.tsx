import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectTrucks, selectTrucksLoading } from "@/redux/trucks/selectors";
import TruckCard from "./TruckCard";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { fetchAllTrucks } from "@/redux/trucks/operations";

export default function TruckCardList() {
  const trucks = useAppSelector(selectTrucks);
  const loading = useAppSelector(selectTrucksLoading);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const limit = 5;

  const handleClick = () => {
    setPage(page + 1);
    dispatch(fetchAllTrucks({ page, limit }));
  };

  return (
    <ul className="flex flex-col gap-8 w-3/4">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        trucks.map((truck) => <TruckCard truck={truck} key={truck.id} />)
      )}
      {!loading && trucks.length > 0 && (
        <div className="flex justify-center" onClick={handleClick}>
          <Button variant="outline">Load more</Button>
        </div>
      )}
    </ul>
  );
}
