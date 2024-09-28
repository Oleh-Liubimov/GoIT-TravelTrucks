import Filters from "@/components/Filters";
import TruckCardList from "@/components/TruckCardList";
import { useAppDispatch } from "@/hooks";
import { fetchTrucks } from "@/redux/trucks/operations";
import { useEffect, useState } from "react";

export default function CampersPage() {
  const [page,setPage] = useState(1);
  const limit = 5;
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    console.log('fetch from campers page')
    dispatch(fetchTrucks({ limit, page }));
  }, [dispatch,page]);
  
  const handleAddPage = (page:number) => {
   setPage(page + 1);
  }
  return (
    <main className="px-12 pb-8 pt-24 flex justify-between gap-8">
      <Filters />
      <TruckCardList page={page} setPage={handleAddPage} />
    </main>
  );
}
