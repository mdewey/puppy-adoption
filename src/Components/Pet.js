import React, { Component } from 'react';

class Pet extends Component {
    render() {
        return (
            <section className="pet">
              <header>{this.props.pet.name.$t}</header>
              <img src={this.props.pet.media.photos.photo[3].$t} />
              <button>Favorite {this.props.pet.name.$t}</button>
            </section>
        );
    }
}

export default Pet;
