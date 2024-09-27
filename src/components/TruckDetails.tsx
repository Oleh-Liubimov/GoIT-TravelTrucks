import { Map, StarIcon } from "lucide-react";
import { Camper } from "@/types";

export interface TruckDetailsProps {
  truck: Camper;
}

export default function TruckDetails({ truck }: TruckDetailsProps) {
  return (
    <div className="mb-5">
      <div>
        <h2 className="font-bold text-2xl">{truck.name}</h2>
        <div>
          <div className="text-black text-base font-semibold flex gap-5 mb-4">
            <div className=" flex">
              <button type="button">
                <StarIcon />
              </button>
              {truck.rating} ({truck.reviews.length} Reviews)
            </div>
            <div className=" text-black font-semibold flex">
              <Map />
              {truck.location}
            </div>
          </div>
          <span className="font-bold inline-block mb-5">${truck.price}</span>
        </div>
      </div>
      <div className="flex justify-center gap-5 mb-5">
        {truck.gallery.map((item) => (
          <img
            key={item.thumb}
            src={item.thumb}
            className="object-cover object-center rounded-xl max-w-72 max-h-80"
            alt="truck image"
          />
        ))}
      </div>
      <div className=" flex flex-col w-2/3 justify-center">
        <div className="flex justify-between"></div>

        <span className="text-left text-slate-500 text-base">
          {truck.description}
        </span>
      </div>
    </div>
  );
}
