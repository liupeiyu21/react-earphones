import Header from "../../comment/Header";
import InforBreadList from "./InforBreadList";
import InforProducts from "./Inforproducts";
import PurchaseRules from "./PurchaseRules";
import NoPurchase from "./NoPurchase";
import InforUserReview from "./InforUserReview";
import Footer from "../../comment/Footer"


function MoreInformation () {
    return(
        <>
        <Header />
        <InforBreadList />
        <InforProducts />
        <PurchaseRules />
        <NoPurchase />
        <InforUserReview />
        <Footer />
        </>
    )
}
export default MoreInformation;