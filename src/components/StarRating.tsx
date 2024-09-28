import { Star } from "lucide-react"

export interface StarRatingProps{
    rating: number
}

export default function StarRating({rating}:StarRatingProps){
    const stars = Array(5).fill(0)

    return <div className="flex">
        {stars.map((_,index) => (
            <Star 
            key={index}
            fill={index < rating ? "yellow" : ''}
            stroke="currentCollor"
            />
        ))}
    </div>
}