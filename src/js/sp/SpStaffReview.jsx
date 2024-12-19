import SpReviewList from '../top/StaffReview/StaffList'

const spReviewItems = [
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
    }
];

function SpStallReview() {
    return(
        <div className="sp-staff-review">
        <h2 className="sp-staff-review-title">スタッフレビュー</h2>
        <div className="sp-title-all">
            <span className="sp-title-new">新着</span>
            <span className="sp-title-pro">人気</span>
        </div>
        <SpReviewList items={spReviewItems} />
        <button className="sp-button">すべて見る</button>
    </div>
    )
}

export default SpStallReview