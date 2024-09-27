import Filters from "@/components/Filters";
import TruckCardList from "@/components/TruckCardList";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchAllTrucks } from "@/redux/trucks/operations";
import { selectTrucksError } from "@/redux/trucks/selectors";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CampersPage() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectTrucksError);

  const handleAddMore = () => {};

  useEffect(() => {
    dispatch(fetchAllTrucks({ limit: 5, page }));
  }, [dispatch, page]);

  return (
    <main className="px-12 pb-8 pt-24 flex justify-between gap-8">
      <Filters />
      <TruckCardList />
    </main>
  );
}
