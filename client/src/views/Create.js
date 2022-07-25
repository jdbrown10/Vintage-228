import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        quantity: 0,
        price: 0
    })

    const history = useHistory();

    const onChangeHandler = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/products/create", form)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler} className="w-50 d-block mx-auto my-3">
                <div className="form-group p-20 my-4">
                    <label htmlFor="name">Name: </label>
                    <input onChange={onChangeHandler} type="text" name="name" className="form-control"/>
                </div>
                <div className="form-group p-20 my-4">
                    <label htmlFor="quantity">Quantity: </label>
                    <input onChange={onChangeHandler} type="number" name="quantity" className="form-control"/>
                </div>
                <div className="form-group p-20 my-4">
                    <label htmlFor="price">Price (USD): </label>
                    <input onChange={onChangeHandler} type="number" name="price" className="form-control"/>
                </div>
                <input type="submit" value="Add Product" className="btn btn-success btn-lg"/>
            </form>
        </div>
    )
}

export default Create;