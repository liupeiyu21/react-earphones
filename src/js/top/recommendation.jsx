import React from "react";
import TopRecommendationB from "../../assets/top-recommendation-b.png";
import TopRecommendationS from "../../assets/top-recommendation-s.png"
import '../../topcss/Recommendation.css'

function  Recommendation() {

    return (
        <>
        <div className="recom">
            <h2 className="recom-tile">おすすめ・特集</h2>
            <div className="recom-content">
                <div className="recom-img1 recom-img" >
                    <img  src={TopRecommendationB} alt="文章のサムネイル" />
                    <p>専門店スタッフが選ぶおすすめの完全ワイヤレスイヤホンをご紹介！スタッフレビューをご参考にしていただければ、自分にあった機種が見つかること間違いなし！</p>
                </div>
                <div className="recom-img2 recom-img">
                    <img src={TopRecommendationB} alt="文章のサムネイル" />
                    <p>専門店スタッフが選ぶおすすめの完全ワイヤレスイヤホンをご紹介！スタッフレビューをご参考にしていただければ、自分にあった機種が見つかること間違いなし！</p>
                </div>
            </div>
            <div className="recom-imgs">
                <img className="imgs1" src={TopRecommendationS} alt="文章のサムネイル" />
                <img className="imgs2" src={TopRecommendationS} alt="文章のサムネイル" />
                <img className="imgs3" src={TopRecommendationS} alt="文章のサムネイル" />
            </div>
        </div>
        
        </>
    )
}
export default Recommendation;