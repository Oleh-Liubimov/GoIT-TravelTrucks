import Filters from "@/components/Filters";
import TruckCardList from "@/components/TruckCardList";
import { useAppDispatch } from "@/hooks";
import { fetchAllTrucks } from "@/redux/trucks/operations";
import { useEffect } from "react";

export default function CampersPage() {
  const page = 1;
  const dispatch = useAppDispatch();

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
