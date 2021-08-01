import React, { useContext } from 'react'
import { DataContext } from "../../context/Datap";
import { ProductItem } from "./ProductItem";

export const ProductsList = () => {

    const value = useContext(DataContext)
    const [products] = value.product
    console.log(products)

    return (
        <>
            <h1 className="title">PRODUCTS</h1>
            <div className="products">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        amount={product.amount}
                    />
                ))
                }
            </div>

        </>
    )
}
