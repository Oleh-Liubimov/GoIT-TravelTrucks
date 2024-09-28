import type { Review } from "@/types";
import { User2Icon } from "lucide-react";
import StarRating from "./StarRating";

export interface ReviewProps{
    review:Review
}

export default function Review({review}:ReviewProps){
    return (
        <div className="mb-5">
            <div className="flex gap-5 items-center mb-5">
                <User2Icon className="size-5" />
                <div className="flex flex-col ">
                    <span>{review.reviewer_name}</span>
                    <div className="flex gap-3">
                        <StarRating rating={review.reviewer_rating}/>
                    </div>
                </div>
            </div>
            <span>{review.comment}</span>
        </div>
    )
}