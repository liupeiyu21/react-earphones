
import React, { useState }  from "react";
// import ItemList from "./ItemList";
import '../../../topcss/Products.css';
import ProductsData from '../../../data/ProductsData.json'
import NewPr from '../../../assets/new-Products.png'

const Products = () => {
    // const newItems = [
    //     {id: 1, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 2, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 3, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 4, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 5, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 6, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 7, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 8, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 9, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 10, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 11, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 12, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 13, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 14, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 15, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},
    //     {id: 16, brand: "ブランド名", name: "商品の名前", status: "新着", price: "000000", tax: true},

    // ];
    const [ selectProduct, setselectProduct] = useState("New");

    const productList = ProductsData.Products[selectProduct];


 
    return(
        <div className="container">
                <div className="heading">
                    <h2
                        className={selectProduct  ===  "New" ? "active" : ""}
                        onClick={() => setselectProduct("New")}
                    >新着アイテム</h2>
                    <h2
                        className={selectProduct === "Old" ? "active" : ""}
                        onClick={() => setselectProduct("Old")}
                    >中古アイテム</h2>
                    <h2
                        className={selectProduct === "Ranking" ? "active" : ""}
                        onClick={() => setselectProduct("Ranking")}
                         onChange={(e) => setselectProduct(e.target.value)}
                    >ランキング</h2>
                </div>
                <div className="item-list">
                {productList.map((product, index) => (
                    
                        <div className="item-card" key={index}>
                            <img src={NewPr} alt={1} />
                            <div className="item-info">
                                <p className="products-brand">{product.brand}</p>
                                <p className="products-name">{product.name}</p>
                                <p className={`products-status ${
                                    product.status === "新着" ? "statusNew" :
                                    product.status === "中古" ? "statusUsed" :
                                    product.status === "ランキング" ? "" : "statusRanking" 
                                }`}>
                                    
                                {product.status}</p>
                                <p className="products-price">¥{product.price.toLocaleString()}<span>税込</span></p>
                            </div>
                        </div>
                    
                ))
                }
                </div>
                <div className="Linkbtn">
                    <button className="linkbtn">すべて見る</button>
                </div>
        </div>


        // <div className="container">
        //     <div className="heading">
        //         <h2>新着アイテム</h2>
        //         <h2>中古アイテム</h2>
        //         <h2>ランキング</h2>
        //     </div>
         
        //     <div className="column">
        //         <ItemList items={newItems}  />
        //     </div>
        //     <div className="Linkbtn">
        //         <button className="linkbtn">すべて見る</button>  
        //     </div>    
        // </div>

    );
};

export default Products;