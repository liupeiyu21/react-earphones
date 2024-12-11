import React from "react";
import "../../css/Recentlychecked.css";
import Recentlychecked from '../../assets/recentlychecked.png'
import Banner from "./Banner";

const products = [
  {
    id: 1,
    brand: "Apple",
    name: "AirPods Pro MWPP2J/A [美品]",
    status: "新品",
    price: "¥15,700",
    image : Recentlychecked,
  },
  {
    id: 2,
    brand: "ANIMA",
    name: "ANW03 Midnight Grand Orchestra Ver.",
    status: "新品",
    price: "¥25,700",
    image: Recentlychecked,
  },
  {
    id: 3,
    brand: "FiiO",
    name: "BTA30Pro [FiiO-BTA30PRO]",
    status: "新品",
    price: "¥23,700",
    image: Recentlychecked,
  },
  {
    id: 4,
    brand: "FiiO",
    name: "BTA30Pro [FiiO-BTA30PRO]",
    status: "新品",
    price: "¥23,700",
    image: Recentlychecked,
  },


];

const Recentlycheck = () => {
  return (
    <>
    <div className="recent-products-banner">
        <Banner />
        <div className="recent-products">
          <h2 className="title">最近チェックした商品</h2>
         <div className="product-list">
            {products.map((product) => (
            <div className="product-card" key={product.id}>
                <img
                src={product.image}
                alt={product.name}
                className="product-image"
                />
                <div className="product-info">
                <p className="product-brand">{product.brand}</p>
                <p className="product-name">{product.name}</p>
                <p className="product-status">{product.status}</p>
                <p className="product-price">{product.price}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    </>
  );
};

export default Recentlycheck;











