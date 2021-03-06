import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/favorites" className="favorite-nav ml-auto">
          <i className="fas fa-heart" title="Favorites List" />
        </Link>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span clasname="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
  .favorite-nav {
    color: #f47378;
    font-size: 2rem;
    transition: all 0.85s linear;
  }
  .favorite-nav:hover {
    color: #ff0000;
    @media (max-width: 576px) {
      .navbar-nav {
        flex-direction: row !important;
  
  }
`;
