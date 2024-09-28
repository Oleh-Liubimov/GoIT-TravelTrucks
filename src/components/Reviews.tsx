import { Camper } from "@/types";
import Review from "./Review";

export interface ReviewsProps {
  truck:Camper
}

export default function Reviews({truck}:ReviewsProps) {

  const {reviews} = truck;


  return <div className="max-w-screen-xl w-1/2">
    <ul>
      {reviews.map(review => (
        <Review review={review} key={review.reviewer_name} />
      ))}
    </ul>
  </div>;
}
