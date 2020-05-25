import React, { useContext } from "react";
import { ProductContext } from "./../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

const Modal = () => {
  const { closeModal, modalProduct } = useContext(ProductContext);
  const { img, title, price } = modalProduct;
  return (
    <ModalContainer>
      <div className="container">
        <div className="row">
          <div
            id="modal"
            className="col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-5"
          >
            <h4>item added successfully</h4>
            <img src={img} className="img-fluid" alt="Product" />
            <h5>{title}</h5>
            <h5 className="text-muted">price: &#8377; {price}</h5>
            <Link to="/">
              <ButtonContainer
                onClick={() => {
                  closeModal();
                }}
              >
                continue shopping
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer cart
                onClick={() => {
                  closeModal();
                }}
              >
                go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
