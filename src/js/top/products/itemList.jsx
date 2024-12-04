import React from "react";
import ItemCard from "./itemCard";

const ItemList =({ items }) => {
    return(
        <div className="item-list">
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;