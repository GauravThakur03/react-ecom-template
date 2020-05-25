import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { ProductContext } from "./context";

function App() {
  const context = useContext(ProductContext);
  return (
    <>
      <NavBar></NavBar>
      <Switch>
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={ProductList} />
        <Route component={Default} />
      </Switch>
      {context.modalOpen ? <Modal product={context.modalProduct}/>:null}
    </>
  );
}

export default App;
