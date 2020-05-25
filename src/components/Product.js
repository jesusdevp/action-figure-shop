import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, inFavorites } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                {/* Add to Favorites Button */}
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
                {/* Add to Card Button */}
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {""}
                      In cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" title="Add to cart" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* Card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    inFavorites: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.85s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.85s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.85s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .favorites-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: #f47378;
    font-size: 1.6rem;
    transform: translate(-100%, 100%);
    transition: all 0.85s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border: none !important;
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
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
  .cart-btn:hover {
    color: var(--lightBlue);
    background: #19788f;
  }
  .img-container:hover .favorites-btn {
    transform: translate(0, 0);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`;
