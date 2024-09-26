import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import EquipmentCard from "./FeatureCard";
import { Separator } from "./ui/separator";
import van from "../assets/icons/bi_grid-1x2.svg";
import fullIntegrated from "../assets/icons/bi_droplet.svg";
import alcove from "../assets/icons/bi_grid-3x3-gap.svg";

export interface BodySelectProps {
  onBodySelect: (value: string[]) => void;
}

export default function BodySelect({ onBodySelect }: BodySelectProps) {
  const [selectedBody, setSelectedBody] = useState<string[]>([]);

  // const handleBodySelect = (value: string[]) => {
  //   setSelectedBody(value);
  //   onBodySelect(selectedBody);
  // };

  const handleBodySelect = (values: string[]) => {
    setSelectedBody((prevSelectedTypes) => {
      return [...prevSelectedTypes, ...values];
    });
    onBodySelect(selectedBody);
  };

  return (
    <div>
      <span className="font-semibold inline-block mb-4">Vehicle type</span>
      <Separator className="mb-4" />
      <ToggleGroup
        onValueChange={handleBodySelect}
        type="multiple"
        variant="outline"
        className="flex gap-3 flex-wrap justify-evenly"
      >
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="van"
          aria-label="Toggle van"
        >
          <EquipmentCard image={van}>
            <span className="text-base">Van</span>
          </EquipmentCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="fullIntegrated"
          aria-label="Toggle fullIntegrated"
        >
          <EquipmentCard image={fullIntegrated}>Fully Integrated</EquipmentCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="alcove"
          aria-label="Toggle alcove"
        >
          <EquipmentCard image={alcove}>Alcove</EquipmentCard>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
