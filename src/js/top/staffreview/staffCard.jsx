import React from "react";
import TopStaffReview from '../../../assets/top-staff-review.png'
import TopStaffReviewIcon from '../../../assets/top-staff-review-icon.png'

const ReviewCard = ({ item }) => {
    return(
        <>
        <div className="review-card">
            <img src={TopStaffReview} alt="スッダフが取った商品の写真" />
            <div className="review-card-content">
                <p className="review-brand">{item.brand}</p>
                <p className="review-name">{item.name}</p>
                <p className="review-category">{item.category}</p>
                <p className="review-description">{item.description}</p>
                <div className="review-card-icon">
                    <img src={TopStaffReviewIcon} alt="スッタフのアカウントのアイコンです。" />
                    <p className="staff">{item.staffName}</p>
                    <p className="store">{item.storeName}</p>  
                </div>
            </div>

        </div>
       
        </>
    )
}
export default ReviewCard;