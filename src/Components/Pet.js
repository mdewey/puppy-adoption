import React, { Component } from "react";

class Pet extends Component {

 addPetToLocal = () => {
     const favoritesArray = this.props.favorites
     favoritesArray.push(this.props.pet)
     console.log(favoritesArray)
     console.log(favoritesArray.length)
     localStorage.setItem('favorites', favoritesArray)
    this.props.updateParentState(favoritesArray)
 }
  render() {
    return (
      <section className="pet-display">
        <section className='pet-card-border'>
          <h3>{this.props.pet.name.$t}</h3>
          <img src={this.props.pet.media.photos.photo[3].$t} alt='animal pic' />
        </section>
        <button onClick={this.addPetToLocal}>❤️ Add to Favorites! ❤️</button>
      </section>
    );
  }
}

export default Pet;
