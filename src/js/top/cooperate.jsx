import React from "react";
import TopCooperate from "../../assets/top-cooperate.png"

import '../../css/cooperate.css'
function Cooperate() {
    return(
        <>
        <h2 className="cooperate-title">相互リンク</h2>
        <div className="cooperate-img">
            <img className="cooperate-img1" src={TopCooperate} alt="相互リンクの画像" />
            <img className="cooperate-img2" src={TopCooperate} alt="相互リンクの画像" />
        </div>
        </>
    )
}
export default Cooperate;