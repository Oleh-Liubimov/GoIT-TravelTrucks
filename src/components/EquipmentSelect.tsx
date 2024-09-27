import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import wind from "../assets/icons/wind.svg";
import bathroom from "../assets/icons/bi_droplet.svg";
import transmission from "../assets/icons/diagram.svg";
import kitchen from "../assets/icons/cup-hot.svg";
import TV from "../assets/icons/Vector.svg";
import { useState } from "react";
import { Separator } from "./ui/separator";
import FeatureCard from "./FeatureCard";

export interface EquipmentSelectProps {
  onEquipmentChange: (values: string[]) => void;
}

export default function EquipmentSelect({
  onEquipmentChange,
}: EquipmentSelectProps) {
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const handleToggleChange = (values: string[]) => {
    setSelectedEquipment(values);

    onEquipmentChange(values);
  };

  return (
    <div className="mb-10">
      <span className="font-semibold inline-block mb-4">Vehicle equipment</span>
      <Separator className="mb-4" />
      <ToggleGroup
        value={selectedEquipment}
        onValueChange={handleToggleChange}
        type="multiple"
        variant="outline"
        className="flex gap-3 flex-wrap justify-evenly"
      >
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="AC"
          aria-label="Toggle AC"
        >
          <FeatureCard image={wind}>
            <span className="text-base">AC</span>
          </FeatureCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="bathroom"
          aria-label="Toggle bathroom"
        >
          <FeatureCard image={bathroom}>Bathroom</FeatureCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="automatic"
          aria-label="Toggle automatic"
        >
          <FeatureCard image={transmission}>Automatic</FeatureCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="kitchen"
          aria-label="Toggle kitchen"
        >
          <FeatureCard image={kitchen}>Kitchen</FeatureCard>
        </ToggleGroupItem>
        <ToggleGroupItem
          className="w-[112px] h-[96px]"
          value="TV"
          aria-label="Toggle TV"
        >
          <FeatureCard image={TV}>TV</FeatureCard>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
