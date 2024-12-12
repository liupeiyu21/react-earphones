import Header from "../comment/Header"



import BreadList from "./BreadList"
import MoneyCategory from "./MoneyCategory"
import SearchForm from "./SearchForm"
import BrandsSearch from "./BrandSrarch"
import SecondHand from "./SecondHand/SecondHand"
import Footer from "../comment/Footer"

import MoreInformation from "./MoreInformation/MoreInformation"
export  const MoneySearch = () =>{
    return(
        <>
       
        <Header />
        <BreadList />
        <MoneyCategory />
        <SearchForm />
        <BrandsSearch />
        <SecondHand />
        <Footer />
        </>
    )
}