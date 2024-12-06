import React from "react";
import ReviewCard from "./staffCard";

const ReviewList = ({ items }) => {

    return(
        <div className="review-list">
            { items.map(( item, index) => (
                <ReviewCard key={index} item={item} />
            ))}
        </div>
    )
}
export default ReviewList;