import FeaturesList from "./FeaturesList";
import { Camper } from "@/types";
import { Separator } from "./ui/separator";

export interface FeaturesProps {
  truck: Camper;
}

export default function Features({ truck }: FeaturesProps) {
  return (
    <div className=" flex flex-col p-10 max-w-screen-xl w-1/2 bg-slate-100 rounded-lg">
      <FeaturesList truck={truck} />
      <div>
        <h3>Vehicle details</h3>
        <Separator className="my-5" />
        <div className="flex justify-between">
          <span>Form</span>
          <span>{truck.form}</span>
        </div>
        <div className="flex justify-between">
          <span>Length</span>
          <span>{truck.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Width</span>
          <span>{truck.width}</span>
        </div>
        <div className="flex justify-between">
          <span>Height</span>
          <span>{truck.height}</span>
        </div>
        <div className="flex justify-between">
          <span>Tank</span>
          <span>{truck.tank}</span>
        </div>
        <div className="flex justify-between">
          <span>Consumption</span>
          <span>{truck.consumption}</span>
        </div>
      </div>
    </div>
  );
}
