import React, { Component } from "react";
import Title from "../Title";

import EmptyFavorites from "./EmptyFavorites";
import { ProductConsumer } from "../../context";
import FavoriteList from "./FavoriteList";
import FavoritesTotals from "./FavoritesTotals";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { favorites } = value;
            if (favorites.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="Favorites" />
                  <FavoriteList value={value} />
                  <FavoritesTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyFavorites />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
