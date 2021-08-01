import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductsList } from "./Products/index";

export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/products" exact component={ ProductsList } />
            </Switch>
        </section>
    )
}
