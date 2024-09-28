import BookingForm from "@/components/BookingForm";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import TruckDetails from "@/components/TruckDetails";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "@/hooks";
import { selectTrucks } from "@/redux/trucks/selectors";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState('features');



  const trucks = useAppSelector(selectTrucks);

  const truck = trucks.find((item) => item.id === id);

  if (!truck) {
    return (
      <div className="flex  flex-col gap-5 items-center justify-center p-24">
        <p>Sorry. Truck is not found</p>
        <Button
          className="rounded-3xl bg-red-600 hover:bg-red-500"
          size="lg"
          onClick={() => navigate("/campers")}
        >
          Back to catalog
        </Button>
      </div>
    );
  }

  return (
    <main className="px-12 pb-8 pt-24">
      <TruckDetails truck={truck} />
        <div className="flex gap-5 pb-3">
          <button onClick={()=>setActiveComponent('features')} className={clsx(activeComponent === 'features' && 'relative after:content-[""] after:absolute after:top-8 after:left-0 after:w-full after:h-[5px] after:bg-red-500')} >Features</button>
          <button onClick={()=>setActiveComponent('reviews')} className={clsx(activeComponent === 'reviews' && 'relative after:content-[""] after:absolute after:top-8 after:left-0 after:w-full after:h-[5px] after:bg-red-500')}>Reviews</button>
        </div>
        <Separator className="mb-10"/>
      <div className="flex gap-10">
          { activeComponent === "features" && <Features truck={truck} />}
        {activeComponent === 'reviews' &&  <Reviews truck={truck} />}
        <BookingForm  />
      </div>
    </main>
  );
}
