import React from "react";
import UsersList from "./usesList";
import '../../../css/UsersReview.css'

const usersItems = [
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
    },
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    },

];

const TopUsersReview = () => {
    return(
        <div className="users">
            <h2 className="users-so">総合レビュー</h2>
            <UsersList items={usersItems} />
            <button className="users-review-brn">もっと見る</button>
        </div>
    )
}

export default TopUsersReview;