import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

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
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
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
                    <ButtonContainer>Back To Products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
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
