import React from "react";
import Header from "../comment/Header";
import { FasView } from "./FasView";
import Recentlycheck from "./Recentlycheck";
import Products from "./Products/Products";
import HighPrice from "./HighPrice";
import StaffReview from "./StaffReview/StaffReview";
import UsersReview from "./UsesrReview/UsersReview";
import ReadingItem from "./ReadingItem";
import Recommendation from "./recommendation";
import News from "./news";
import Guidance from "./guidance";
import Cooperate from "./cooperate";
import Footer from "../comment/footer";
import Lastinfo from "./lastinfo";

function Top() {

    return(
        <>
        <Header />
        <FasView />
        <div className="repr">
            <Recentlycheck />
            <Products />
        </div>
        <HighPrice />
        <StaffReview />
        <UsersReview />
        <ReadingItem />
        <Recommendation />
        <News />
        <Guidance />
        <Cooperate />
        <Footer />
        <Lastinfo />
        </>
    )
}

export default Top;