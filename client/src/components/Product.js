import React from "react";

const Product = (props) => {
    const {name, price, quantity} = props.product
    return(
        <div className="productBox">
            <h2 className="mb-2">{name}</h2>
            <h5>Price: {price}</h5>
            <h6>Quantity Remaining: {quantity}</h6>
            <p>Dropdown to select quantity || button to make a purchase </p>
        </div>
    )
}

export default Product;