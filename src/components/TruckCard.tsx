import { Camper } from "@/types";

import FeaturesList from "./FeaturesList";
import { Button } from "./ui/button";
import star from "../assets/icons/heart.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addFavorite } from "@/redux/favorites/slice";
import { selectFavorite } from "@/redux/favorites/selectors";
import { useState } from "react";

export interface TruckCardProps {
  truck: Camper;
}

export default function TruckCard({ truck }: TruckCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(selectFavorite);
  // const [favorite, setFavorite] = useState(false);

  const handleClick = (id: string) => {
    navigate(`/campers/${id}`);
  };

  // const handleAddFavorite = (truck: Camper) => {
  //   dispatch(addFavorite(truck));
  // };

  return (
    <div className="border p-6 flex gap-6 rounded-3xl">
      <div className="w-1/3">
        <img
          src={truck.gallery[0].thumb}
          className="object-cover object-center w-full h-full rounded-xl"
          alt="truck image"
        />
      </div>
      <div className=" flex flex-col w-2/3 justify-center">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl truncate">{truck.name}</h2>
          <div className=" flex justify-center items-center gap-3">
            <span className="font-bold">${truck.price}</span>
            <button type="button">
              <img src={star} alt="" />
            </button>
          </div>
        </div>
        <div className=" flex gap-4">
          <span>
            <img src="./assets/icons/star.svg" alt="" />
            <span className="text-black text-base font-semibold">
              {truck.rating}({truck.reviews.length} Reviews)
            </span>
          </span>
          <span className=" text-black font-semibold">
            <img src="./assets/icons/map.svg" alt="" />
            {truck.location}
          </span>
        </div>

        <span className="text-left text-gray-800 text-base truncate">
          {truck.description}
        </span>
        <FeaturesList truck={truck} />
        <Button
          size="lg"
          variant="destructive"
          className="max-w-40 rounded-3xl"
          onClick={() => handleClick(truck.id)}
        >
          Show more
        </Button>
      </div>
    </div>
  );
}
