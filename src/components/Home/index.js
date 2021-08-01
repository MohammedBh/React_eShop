import React from 'react'
import Banner from "../../img/banner.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <Link to="/">
                <h1 className="title">Home</h1>
            </Link>
            <Link to="/products">
                <h1 className="title">Products</h1>
                <div className="banner">
                    <img src={Banner} alt="banner" />
                </div>
            </Link>
        </div>
    )
}
