import React, { useContext } from "react";
import { ProductContext } from "./../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Details = () => {
  const { detailProduct, addToCart, openModal } = useContext(ProductContext);
  const { id, company, img, info, price, title, inCart } = detailProduct;
  return (
    <>
      <div className="container py-5">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* title end */}
        {/* Product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} alt="product" className="img-fluid" />
          </div>
          {/* Product text */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model: {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              <span className="text-uppercase">Made by: {company}</span>
            </h4>
            <h4 className="text-blue">
              <strong>
                price: <span>&#8377;</span>
                {price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                disabled={inCart}
                onClick={() => {
                  addToCart(id);
                  openModal(id);
                }}
              >
                {inCart ? "in cart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
        {/* Product info end */}
      </div>
    </>
  );
};

export default Details;
