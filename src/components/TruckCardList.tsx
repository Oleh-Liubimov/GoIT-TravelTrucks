import { useAppSelector } from "@/hooks";
import { selectTrucks } from "@/redux/trucks/selectors";
import TruckCard from "./TruckCard";

export default function TruckCardList() {
  const trucks = useAppSelector(selectTrucks);

  return (
    <ul className="flex flex-col gap-8 w-3/4">
      {trucks.map((truck) => (
        <TruckCard truck={truck} key={truck.name} />
      ))}
    </ul>
  );
}
