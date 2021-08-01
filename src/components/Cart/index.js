import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataContext } from "../../context/Datap";

export const Cart = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart, setCart] = value.cart;
    const [total] = value.total;

    const togglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "carts show" : "carts";
    const show2 = menu ? "cartt show" : "cartt";

    const minus = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.amount === 1 ? item.amount = 1 : item.amount -= 1;
            }
            setCart([...cart])
        });
    }
    const plus = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.amount += 1;
            }
            setCart([...cart])
        });
    }

    const removeProduct = id => {
        if (window.confirm('Voulez-vous supprimer ce produit?')) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    item.amount = 1;
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="cart__close" onClick={togglefalse}>
                    <FontAwesomeIcon className="btnClose" icon="window-close" />
                </div>
                <h2>Cart</h2>
                <div className="cart__center">
                    {

                        cart.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem", color: "orange", margin: "50px auto"
                        }}>Le panier es Vide</h2> :
                            cart.map((product) => (
                                <div className="cart__item">
                                    <img src={product.image} alt="" />
                                    <div>
                                        <h3>{product.title}</h3>
                                        <p className="price">€{product.price}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="btnArrow" icon="arrow-circle-up" onClick={() => plus(product.id)} />
                                        <p className="amount">{product.amount}</p>
                                        <FontAwesomeIcon className="btnArrow" icon="arrow-circle-down" onClick={() => minus(product.id)} />
                                    </div>
                                    <div className="remove__item" onClick={() => removeProduct(product.id)}>
                                        <FontAwesomeIcon className="btnTrash" icon="trash" />
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div className="cart__footer">
                    <h3>Total : €{ total}</h3>
                    <button className="btn">Payer</button>
                </div>
            </div>
        </div >
    )
}
