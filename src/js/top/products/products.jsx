
import React, { useState }  from "react";
// import ItemList from "./ItemList";
import '../../../topcss/Products.css';
import ProductsData from '../../../data/ProductsData.json'
import NewPr from '../../../assets/new-Products.png'

const Products = () => {
  
    const [ selectProduct, setselectProduct] = useState("New");

    const productList = ProductsData.Products[selectProduct];

    const [ activeTab, setActiveTab ] = useState("New");
    const active = ProductsData.Products[activeTab];

 
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
                            <img src={product.img} alt={1} />
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