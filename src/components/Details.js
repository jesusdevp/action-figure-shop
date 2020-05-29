import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer, BackButton } from "./Button";
import styled from "styled-components";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
            inFavorites,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End title*/}

              {/* Product Info */}
              <div className="row">
                <ImgWrapper className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <div className="img-container  ">
                    <img src={img} className="img-fluid" alt="product" />
                    <button
                      className="favorites-btn"
                      disabled={inFavorites ? true : false}
                      onClick={() => {
                        value.addToFavorites(id);
                      }}
                    >
                      {inFavorites ? (
                        <i
                          className="fas fa-heart btn-active"
                          title="Added to Favorites"
                        />
                      ) : (
                        <i className="fas fa-heart" title="Add to Favorites" />
                      )}
                    </button>
                  </div>
                </ImgWrapper>

                {/* Product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Name: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    By: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <Link to="/">
                    <BackButton back>Back To Products</BackButton>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "in Cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const ImgWrapper = styled.div`
  .img-container {
    position: relative;
    overflow: hidden;
  }
  &:hover {
    .img-container {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .img-container:hover .img-fluid {
    background: rgba(0, 0, 0, 0.15);
    transform: scale(1.1);
  }
  .img-fluid {
    transition: all 0.85s linear;
  }
  .favorites-btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: #f47378;
    font-size: 2rem;
    transform: translate(100%, -100%);
    transition: all 0.85s linear;
  }
  .favorites-btn:hover {
    color: #ed1c24;
  }
  .favorites-btn:active {
    border: none;
    color: #ff0000;
  }
  .btn-active {
    border: none;
    color: #ff0000;
  }
  .img-container:hover .favorites-btn {
    transform: translate(0, 0);
  }
`;
