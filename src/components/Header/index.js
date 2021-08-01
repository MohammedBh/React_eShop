import React, { useContext } from 'react'
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Datap";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={Logo} alt="logo" height="40" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
            <div className="cart" onClick={toggleMenu}>
                <FontAwesomeIcon className="shopCart" icon="shopping-bag" />
                <span className="item__total">{cart.length}</span>
            </div>
        </header>
    )
}
