import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";
import Pet from "./Components/Pet";

class App extends Component {
  constructor(props) {
    super(props);

    let starterFavorites = localStorage.getItem("favorites");
    starterFavorites = starterFavorites ? starterFavorites.split(",") : [];

    this.state = {
      pets: [],
      favorites: starterFavorites
    };
  }

  updateFavoriteListState = (favoritesArray) => {
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
      <div className="App">
        <header>
          <h1>Pets for Adoption</h1>

          <nav>
            <ul>
              <li>View all pets</li>
              <li className="nav-bar-favorites-button">
                <p>Favorites</p>
                <p>{this.state.favorites.length}</p>
              </li>
            </ul>
          </nav>
        </header>

        <section className="pets-list">
          {this.state.pets.map((pet, i) => {
            return <Pet pet={pet} key={i} favorites={this.state.favorites} updateParentState={this.updateFavoriteListState} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;
