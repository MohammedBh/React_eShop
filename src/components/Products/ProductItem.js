import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Datap";

export const ProductItem = ({
    id,
    title,
    price,
    image,
    amount
}) => {
    const value = useContext(DataContext);
    const addCart = value.addCart;


    return (
        <div className="product">
            <a href="#">
                <div className="product__img">
                    <img src={image} alt={title} height="180px" />
                </div>
            </a>
            <div className="product__footer">
                <h1>{title}</h1>
                <p className="price">€{price}</p>
            </div>
            <div className="buttom">
                <button className="btn" onClick={() => addCart(id)}>
                    Add to cart
                </button>
                <div>
                    <a href="#" className="btn">View</a>
                </div>
            </div>
        </div>
    )
}
