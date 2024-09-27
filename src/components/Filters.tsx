import { useState } from "react";
import LocationSelect from "./LocationSelect";
import EquipmentSelect from "./EquipmentSelect";
import BodySelect from "./BodySelect";

export default function Filters() {
  const [location, setLocation] = useState("");
  const [body, setBody] = useState<string>("");
  const [equipment, setEquipment] = useState<string[]>([]);

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

  // const formatFilters = (location: string, body: string, equipment: string[]) => {
  //   const formattedLocation = location ? `location=${location}` : '';
  //   const formattedBody = body ? `form=${body}` : '';
  //   const formattedEquipment = equipment.map(item => ``)

  // }

  return (
    <aside className="w-1/4 sticky top-12 h-screen overflow-y-auto">
      <LocationSelect onLocationChange={handleLocationChange} />
      <span className="text-base text-gray-600 mb-8 inline-block">Filters</span>
      <EquipmentSelect onEquipmentChange={handleSelectEquipment} />
      <BodySelect onBodySelect={handleBodyChange} />
    </aside>
  );
}
