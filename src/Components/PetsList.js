import React, { Component } from "react";
import Pet from "./Pet";
import petData from "../Data/pet.json";
import { Link } from "react-router-dom";

class PetsList extends Component {
  constructor(props) {
    super(props);

    let starterFavorites = localStorage.getItem("favorites");
    starterFavorites = starterFavorites ? starterFavorites.split(",") : [];

    this.state = {
      pets: [],
      favorites: starterFavorites
    };
  }

  updateFavoriteListState = favoritesArray => {
    this.setState({
      favorites: favoritesArray
    });
  };

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    console.log(petData);
  }

  render() {
    return (
      <section className="pets-list">
        {this.state.pets.map((pet, i) => {
          return (
            <Link to={`./${i}`}>
            {console.log(pet)}
              <Pet
                pet={pet}
                key={i}
                favorites={this.state.favorites}
                updateParentState={this.updateFavoriteListState}
              />
            </Link>
          );
        })}
      </section>
    );
  }
}

export default PetsList;
