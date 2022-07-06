import React, {useState, useEffect} from "react";
import axios from "axios";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/all")
            .then(res=>{
                // console.log(res.data);
                setProducts(res.data);
            })
            .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <ul>
                {
                    products.map((product,i)=>{
                        return <li key={i}>{product.name}, price: {product.price}, quantity: {product.quantity}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main;