import React from "react";

const Product = (props) => {
    return(
        <div className="productBox">
            product here: {props.product.name}
        </div>
    )
}

export default Product;