import { useState } from "react";
import LocationSelect from "./LocationSelect";
import EquipmentSelect from "./EquipmentSelect";
import BodySelect from "./BodySelect";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters } from "@/redux/filters/slice";
import { selectFilters } from "@/redux/filters/selectors";
import { fetchTrucks } from "@/redux/trucks/operations";

export default function Filters() {
  const [location, setLocation] = useState("");
  const [body, setBody] = useState<string>("");
  const [equipment, setEquipment] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);

  console.log(location);
  console.log(body);
  console.log(equipment);

  const handleLocationChange = (value: string) => {
    setLocation(value);
  };

  const handleBodyChange = (value: string) => {
    setBody(value);
  };

  const handleSelectEquipment = (newEquipment: string[]) => {
    setEquipment(newEquipment);
  };

  const formatFilters = (
    location: string,
    body: string,
    equipment: string[]
  ) => {
    const formattedLocation = location ? `location=${location}` : "";
    const formattedBody = body ? `&form=${body}&` : "&";
    const formattedEquipment = equipment
      .map((item) => `${item}=true`)
      .join("&");

    const filters = `${formattedLocation}${formattedBody}${formattedEquipment}`;
    dispatch(setFilters(filters));
  };

  const handleApplyFilters = (
    location: string,
    body: string,
    equipment: string[]
  ) => {
    formatFilters(location, body, equipment);
    dispatch(fetchTrucks({ filters }));
  };

  return (
    <aside className="w-1/4 sticky top-12 h-screen overflow-y-auto flex flex-col">
      <LocationSelect onLocationChange={handleLocationChange} />
      <span className="text-base text-gray-600 mb-8 inline-block">Filters</span>
      <EquipmentSelect onEquipmentChange={handleSelectEquipment} />
      <BodySelect onBodySelect={handleBodyChange} />
      <Button
        size="lg"
        variant="destructive"
        className="rounded-3xl mx-auto mt-5"
        onClick={() => handleApplyFilters(location, body, equipment)}
      >
        Search
      </Button>
    </aside>
  );
}
