import React, { Component } from 'react';

class Pet extends Component {

    savePetToLocalStorage = () => {
        console.log("button was clicked")
        
    }
    render() {
        return (
            <section className="pet" >
              <header>{this.props.pet.name.$t}</header>
              <img src={this.props.pet.media.photos.photo[3].$t} />
              <button onClick={this.savePetToLocalStorage}>Save for Later! arf!</button>
            </section>
        );
    }
}

export default Pet;
