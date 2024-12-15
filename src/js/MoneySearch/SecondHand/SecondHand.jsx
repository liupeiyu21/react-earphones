import { Link } from "react-router-dom";
// import SecondList from "./SecondList";
import '../../../moneySearchcss/SecondHand.css'
import Subsen from '../../../assets/sub-second-hand.png'
import { useState } from "react";

import PurchaseData from '../../../data/PurchaseData.json'





const SecondHand = () => {
    // const secondItems = [
    //     {id: 1, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 2, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 3, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 4, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 5, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 6, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 7, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 8, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 9, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 10, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 11, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 12, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 13, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 14, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 15, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
    //     {id: 16, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},

    // ];

    const [ secondhand, setSecondHand ] = useState("Recommendation");

    const secondList = PurchaseData.Purchase[secondhand];


    return(

        // <div className="second">
        //    <Link to="/買取商品の詳細" className="second-item-line"> <SecondList items={secondItems} /> </Link>
        // </div>

        <>
            <div className="second-container">
              <form className="second-form">
                <label htmlFor="second">並べる替え：</label>
                <select 
                name="" 
                id="second"
                onChange={(e) => setSecondHand(e.target.value)}
                >
                    <option value="Recommendation">おすすめ</option>
                    <option value="Popularity">人気順</option>
                    <option value="Highprice">買取金額が高い順</option>
                </select>
              </form>

              <div className="pape">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
             
              <div className="second-item-list">
              
                {secondList.map((seconds, index) => (
                    <div className="second-card" key={index}>
                        <Link to="/買取商品の詳細"><img src={Subsen} alt="2" /></Link>
                        <div className="second-infor">
                        <p className="second-brand">{seconds.brand}</p>
                        <p className="second-name">{seconds.name}</p>
                        <p className="second-status">{seconds.status}</p>
                        <p className="second-price">〜¥{seconds.price}</p>
                        </div>
                        
                    </div>
               
                ))}
              </div>
              <div className="pape2">
                <span>1</span><span>2</span><span>3</span><span>4</span>
              </div>
             
            </div>
        </>
    )
}

export default SecondHand;