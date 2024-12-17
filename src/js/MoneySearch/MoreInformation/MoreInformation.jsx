import Header from "../../comment/Header";
import InforBreadList from "./InforBreadList";
import InforProducts from "./Inforproducts";
import PurchaseRules from "./PurchaseRules";
import NoPurchase from "./NoPurchase";
import InforUserReview from "./InforUserReview";
import Footer from "../../comment/Footer"
import '../../../moreInformationcss/MoreInformation.css'

function MoreInformation () {
    return(
        <>
        <Header />
        <InforBreadList />
        <div className="more">
            <InforProducts />
            <PurchaseRules />
            <NoPurchase />
            <InforUserReview />
        </div>
        <Footer />
        </>
    )
}
export default MoreInformation;