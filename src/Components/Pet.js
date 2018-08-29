import React, { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <section className="pet-display">
        <section className='pet-card-border'>
          <h3>{this.props.pet.name.$t}</h3>
          <img src={this.props.pet.media.photos.photo[3].$t} />
        </section>
        <button>❤️ Add to Favorites! ❤️</button>
      </section>
    );
  }
}

export default Pet;
