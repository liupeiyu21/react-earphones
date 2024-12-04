
import React from "react";
import Newproducts from "../../../assets/new-products.png"

const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <img src={Newproducts} alt={item.name} />
            <div className="item-info">
                <p className="products-brand">{item.brand}</p>
                <p className="products-name">{item.name}</p>
                <p className="products-status">{item.status}</p>
                <p className="products-price">¥{item.price.toLocaleString()}<span>税込</span></p>
            </div>
        </div>
    )
}

export default ItemCard;