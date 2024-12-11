
import React  from "react";
import ItemList from "./ItemList";
import '../../../css/products.css';


const Products = () => {
    const newItems = [
        {id: 1, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 2, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 3, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 4, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 5, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 6, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 7, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 8, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 9, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 10, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 11, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 12, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 13, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 14, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 15, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
        {id: 16, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},

    ];
    // const usedItems = [
    //     {id: 3, brand: "ブランド名", name: "商品の名前", status: "中古", price: "000000", tax: true},
    //     {id: 4, brand: "ブランド名", name: "商品の名前", status: "中古", price: "000000", tax: true},
    // ];
    // const rankingItems = [
    //     {id: 5, brand: "ブランド名", name: "商品の名前", status: "新品", price: "000000", tax: true},
    //     {id: 6, brand: "ブランド名", name: "商品の名前", status: "新品", price: "000000", tax: true},
    // ];

    return(

        <div className="container">
            <div className="heading">
                <h2>新着アイテム</h2>
                <h2>中古アイテム</h2>
                <h2>ランキング</h2>
            </div>
         
            <div className="column">
                <ItemList items={newItems}  />
            </div>
            <div className="Linkbtn">
                <button className="linkbtn">すべて見る</button>  
            </div>    
        </div>

    );
};

export default Products;