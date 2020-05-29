import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

export default class FavoriteItem extends Component {
  render() {
    const { id, title, img, price } = this.props.item;
    const { removeFavorite } = this.props.value;
    return (
      <FavoriteWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-2">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div className="img-container p-5">
                <img src={img} alt="product" className="card-img-top" />

                {/* Details Button */}
                <button
                  className="detail-btn"
                  onClick={() => value.handleDetail(id)}
                  title="Details"
                >
                  <Link to="/details">
                    <i className="fas fa-info-circle" />
                  </Link>
                </button>
                {/* Add to Remove Button */}
                <button
                  className="remove-btn"
                  onClick={() => removeFavorite(id)}
                  title="Remove"
                >
                  <i className="fas fa-trash" />
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
      </FavoriteWrapper>
    );
  }
}

const FavoriteWrapper = styled.div`
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
  .detail-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none;
    color: #60c5f1;
    font-size: 1.6rem;
    transform: translate(-100%, 100%);
    transition: all 0.85s linear;
  }
  .remove-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: transparent;
    border: none !important;
    color: #bfb500;
    border-radius: 0.5rem 0 0 0;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    transition: all 0.85s linear;
  }
  .detail-btn:hover {
    color: #007bff;
  }
  .remove-btn:active {
    border: none;
    color: var(--mainYellow);
  }
  .btn-active {
    border: none;
    color: #ff0000;
  }
  .remove-btn:hover {
    color: var(--mainYellow);
  }
  .img-container:hover .detail-btn {
    transform: translate(0, 0);
  }
  .img-container:hover .remove-btn {
    transform: translate(0, 0);
  }
`;
