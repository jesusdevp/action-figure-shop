import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class FavoritesTotals extends Component {
  render() {
    const { favorites, clearFavorites } = this.props.value;

    const emptyFavorites = favorites.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyFavorites && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearFavorites();
                    }}
                  >
                    clear favorites
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
