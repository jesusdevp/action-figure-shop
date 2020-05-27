import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer, BackButton } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="column mx-auto col-md-6 col-lg-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>Item added to the cart</h5>
                      <h5>{title}</h5>
                      <img src={img} className="img-fluid" alt="product" />

                      <h5 className="text-muted">price: $ {price}</h5>
                      {/* Continue Shopping Button*/}
                      <Link to="/">
                        <BackButton back onClick={() => closeModal()}>
                          Continue Shopping
                        </BackButton>
                      </Link>
                      {/*Go to cart*/}
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
