import React from "react";
import ReviewList from "./StaffList";
import '../../../css/StaffReview.css'
const StaffReview = () => {

    const reviewItems = [
        {
            brand: "ブランド名",
            name: "商品の名前",
            category: "カテゴリー分類",
            description: "スタッフのレビュー文",
            staffName: "スッダフの名前",
            storeName: "店舗の名前",
        },
        {
            brand: "ブランド名",
            name: "商品の名前",
            category: "カテゴリー分類",
            description: "スタッフのレビュー文",
            staffName: "スッダフの名前",
            storeName: "店舗の名前",
        },
        {
            brand: "ブランド名",
            name: "商品の名前",
            category: "カテゴリー分類",
            description: "スタッフのレビュー文",
            staffName: "スッダフの名前",
            storeName: "店舗の名前",
        },
    ];

    return(
        <div className="staddrev">
            <h2 className="staddrev-rd">スタッフレビュー</h2>
            <div className="sradderv-rd-ra">
                <span className="sradderv-new">新着</span>
                <span className="sradderv-pro">人気</span>
            </div>
            <ReviewList items={reviewItems} />
            <button className="review-button">すべて見る</button>
        </div>
    )
}
export default StaffReview;