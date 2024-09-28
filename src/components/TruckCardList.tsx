import { useAppSelector } from "@/hooks";
import { selectTrucks, selectTrucksLoading } from "@/redux/trucks/selectors";
import TruckCard from "./TruckCard";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";


export interface TruckCardListProps{
  page:number;
  setPage:(page:number) => void;
}

export default function TruckCardList({page,setPage}:TruckCardListProps ) {
  const trucks = useAppSelector(selectTrucks);
  const loading = useAppSelector(selectTrucksLoading);

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <ul className="flex flex-col gap-8 w-3/4">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      ) : (
        trucks.map((truck) => <TruckCard truck={truck} key={truck.name} />)
      )}
      {!loading && trucks.length > 0 && (
        <div className="flex justify-center" onClick={handleClick}>
          <Button variant="outline">Load more</Button>
        </div>
      )}
    </ul>
  );
}
