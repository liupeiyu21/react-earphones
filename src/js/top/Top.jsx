import React from "react";
import Header from "../comment/Header";
import { FasView } from "./FasView";
// import Recentlycheck from "./Recentlycheck";
import Products from "./Products/Products";
import HighPrice from "./HighPrice";
import StaffReview from "./StaffReview/StaffReview";
import UsersReview from "./UsesrReview/UsersReview";
import ReadingItem from "./ReadingItem";
import Recommendation from "./Recommendation";
import News from "./News";
import Guidance from "./Guidance";
import Cooperate from "./Cooperate";
import Footer from "../comment/Footer";
import Lastinfo from "./Lastinfo";
import '../../topcss/Top.css'
import Banner from "./Banner";
import RecentlySwiper from "./RecentlySwiper";
import TopLinkImg from "../sp/TopLinkImg";
import HamburgerMenu from "../sp/HamburgerMenu";
import SpSearch from "../sp/SpSearch";
import SpStallReview from '../sp/SpStaffReview'
import SpUsersReview from '../sp/SpUsersReview'
import Spfooter from '../sp/Spfooter'
function Top() {

    return(
        <>
       
        <Header />
        <HamburgerMenu />
        <SpSearch />
        <FasView />
        <TopLinkImg />
        <div className="abn">
            <Banner />
            <div className="vbn">
                <RecentlySwiper />
                <Products />
                <HighPrice />
                
                <SpStallReview />
                
                <StaffReview />
                
                <UsersReview />
                <SpUsersReview />

                <ReadingItem />
                <Recommendation />
                <News />
                <Guidance />
                <Cooperate />
            </div>
        </div>
   
        <Footer />
        <Spfooter />
        <Lastinfo />
        </>
    )
}

export default Top;