import { Link } from "react-router-dom";
import SecondList from "./SecondList";

const SecondHand = () => {
    const secondItems = [
        {id: 1, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 2, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 3, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 4, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 5, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 6, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 7, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 8, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 9, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 10, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 11, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 12, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 13, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 14, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 15, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},
        {id: 16, brand: "ブランド名", name: "商品の名前", status: "買取上限金額", price: "15,700", tax: true},

    ];

    return(

        <div className="second">
           <Link to="/買取商品の詳細"> <SecondList items={secondItems} /> </Link>
        </div>
    )
}

export default SecondHand;