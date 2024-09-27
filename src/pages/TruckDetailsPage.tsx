import BookingForm from "@/components/BookingForm";
import Features from "@/components/Features";
import TruckDetails from "@/components/TruckDetails";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { selectTrucks } from "@/redux/trucks/selectors";
import { useNavigate, useParams } from "react-router-dom";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <div className="flex gap-10">
        <Features truck={truck} />
        <BookingForm />
      </div>
    </main>
  );
}
