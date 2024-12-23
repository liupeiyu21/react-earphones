import Header from "../comment/Header"



import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandSrarch"
import SecondHand from "./SecondHand/SecondHand"
import Footer from "../comment/Footer"

import '../../moneySearchcss/MoneySearch.css'

import RecentlySwiper from "../top/RecentlySwiper"
export  const MoneySearch = () =>{
    return(
        <>
       
        <Header />
        <div className="money">
            <BreadList />
            <div className="second-items">
            
                <div className="product-search">
                    <MoneyCategory />
                    <BrandsSearch />
                </div>
                <div className="second-product">
                    <SearchForm />
                    <SecondHand />
                    <RecentlySwiper />
                </div> 
            </div>
        </div>
      
        <Footer />
        </>
    )
}