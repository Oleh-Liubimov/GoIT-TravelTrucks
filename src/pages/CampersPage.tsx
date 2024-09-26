import Filters from "@/components/Filters";
import TruckCardList from "@/components/TruckCardList";
import { useAppDispatch } from "@/hooks";
import { fetchAllTrucks } from "@/redux/trucks/operations";
import { useEffect } from "react";

export default function CampersPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
  }, [dispatch]);

  return (
    <main className="px-12 py-12 flex justify-between gap-8">
      <Filters />
      <TruckCardList />
    </main>
  );
}
