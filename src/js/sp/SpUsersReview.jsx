import SpUsersReviewInfor from '../top/UsesrReview/UsesList'

const spuserreview = [
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    },
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    }
];

const SpUsersReview =  () =>{
    return(
        <div className="sp-users">
            <h2 className="sp-users-title">総合レビュー</h2>
            <SpUsersReviewInfor items={spuserreview} />
            <button className="sp-users-review-brn">もっと見る</button>
        </div>
    )
}

export default SpUsersReview;