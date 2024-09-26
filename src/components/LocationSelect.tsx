import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export interface LocationSelectProps {
  onLocationChange: (value: string) => void;
}

export default function LocationSelect({
  onLocationChange,
}: LocationSelectProps) {
  const [location, setLocation] = useState("");

  const handleSelectChange = (value: string) => {
    setLocation(value);
    onLocationChange(location);
  };
  return (
    <div className="mb-10">
      <span className="text-base text-gray-600">Location</span>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[250px] ml-1">
          <SelectValue placeholder="Select a location" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Location</SelectLabel>
            <SelectItem value="kyiv">Ukraine, Kyiv</SelectItem>
            <SelectItem value="kharkiv">Ukraine, Kharkiv</SelectItem>
            <SelectItem value="lviv">Ukraine, Lviv</SelectItem>
            <SelectItem value="sumy">Ukraine, Sumy</SelectItem>
            <SelectItem value="odesa">Ukraine, Odesa</SelectItem>
            <SelectItem value="dnipro">Ukraine, Dnipro</SelectItem>
            <SelectItem value="poltava">Ukraine, Poltava</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
