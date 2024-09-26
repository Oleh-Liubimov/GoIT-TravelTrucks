import { Camper, FeatureImages, FeaturesData } from "@/types";
import wind from "../assets/icons/wind.svg";
import bathroom from "../assets/icons/bi_droplet.svg";
import transmission from "../assets/icons/diagram.svg";
import kitchen from "../assets/icons/cup-hot.svg";
import radio from "../assets/icons/radio.png";
import TV from "../assets/icons/Vector.svg";
import engine from "../assets/icons/petrol.svg";

export interface FeaturesListProps {
  truck: Camper;
}

export default function FeaturesList({ truck }: FeaturesListProps) {
  const featuresData: FeaturesData = {
    AC: truck.AC,
    bathroom: truck.bathroom,
    transmission: truck.transmission,
    kitchen: truck.kitchen,
    radio: truck.radio,
    TV: truck.TV,
    engine: truck.engine,
  };

  const featuresImg: FeatureImages = {
    AC: wind,
    bathroom: bathroom,
    transmission: transmission,
    kitchen: kitchen,
    radio: radio,
    TV: TV,
    engine: engine,
  };

  return (
    <div className="flex gap-2 flex-wrap mt-6 gap-y-2 mb-6">
      {Object.entries(featuresData).map(([key, value]) => {
        if (value) {
          return (
            <div
              key={key}
              className=" flex gap-1 items-center  bg-gray-200 rounded-3xl p-3 py-3 "
            >
              <img src={featuresImg[key]} alt={key} />
              <span className="text-gray-700 capitalize">{key}</span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
