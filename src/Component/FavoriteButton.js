import React, { Component } from "react";

class FavoriteButton extends Component {
  render() {
    if (this.props.isFavorited) {
      return <span>&#x1F497;</span>;
    } else {
      return <div />;
    }
  }
}

export default FavoriteButton;
