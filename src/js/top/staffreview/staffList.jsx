import React from "react";
import ReviewCard from "./StaffCard";

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