import React, { Component } from "react";
import FavoriteItem from "./FavoriteItem";
export default class FavoriteList extends Component {
  render() {
    const { value } = this.props;
    const { favorites } = this.props.value;
    return (
      <div className="py-5">
        <div className="container">
          <div className="row">
            {favorites.map((item) => (
              <FavoriteItem key={item.id} item={item} value={value} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
