import { Camper } from "@/types";
import FeaturesList from "./FeaturesList";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Map, Star } from "lucide-react";
import { addFavorite, removeFavorite } from "@/redux/favorites/slice";
import { selectFavorite } from "@/redux/favorites/selectors";
import { useAppDispatch, useAppSelector } from "@/hooks";

export interface TruckCardProps {
  truck: Camper;
}

export default function TruckCard({ truck }: TruckCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorite);

  const handleClick = (id: string) => {
    navigate(`/campers/${id}`);
  };

  const handleAddFavorite = (truck: Camper) => {
    dispatch(addFavorite(truck));
  };

  const handleRemoveFavorite = (id: string) => {
    dispatch(removeFavorite(id));
  };

  const handleFavoriteClick = (truck: Camper) => {
    const isFavorite = favorites.some((f) => f.id === truck.id);
    if (isFavorite) {
      handleRemoveFavorite(truck.id);
    } else {
      handleAddFavorite(truck);
    }
  };

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
            <span className="font-bold">${truck.price}.00</span>
            <button onClick={() => handleFavoriteClick(truck)}>
              {favorites.some((fav) => fav.id === truck.id) ? (
                <Heart fill="red" />
              ) : (
                <Heart />
              )}
            </button>
          </div>
        </div>
        <div className=" flex gap-4">
          <div className="flex hover:underline cursor-pointer">
            <Star className="size-5" fill="yellow" stroke="currentCollor" />
            <span className="text-black text-base font-semibold">
              {truck.rating} ({truck.reviews.length} Reviews)
            </span>
          </div>
          <div className=" text-black font-semibold flex items-center">
            <Map />
            {truck.location}
          </div>
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
