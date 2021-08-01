import React from "react";
import "./components/FontawesomeIcons";
import { Header } from "./components/Header/index";
import { BrowserRouter as Route } from "react-router-dom";
import { Pages } from "./components/Pages";
import { DataProvider } from "./context/Datap";
import { Cart } from "./components/Cart";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Route>
          <Header />
          <Cart/>
          <Pages />
        </Route>
      </div>
    </DataProvider>
  );
}

export default App;
