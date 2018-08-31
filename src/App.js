import React, { Component } from "react";
import PetList from './Components/PetList'
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      petCount: 0
    }
  }
  

  componentDidMount() {
    let _favoritePets = localStorage.getItem('favoritePets')
    _favoritePets = _favoritePets ? JSON.parse(_favoritePets) : []
    let _count = _favoritePets.length
    this.setState({
      pets: petData.petfinder.pets.pet,
      petCount: _count
    });
  }

  getFavoritedPetsCount = len => {
    this.setState({
      petCount: len
    })
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <header>Pets for Adoption</header>
        </section>
        <nav>
          <ul>
            <li>Favorited Adoptees</li>
            <li>View All Pets</li>
          </ul>
        </nav>
        <h3>You have favorited {this.state.petCount} pets!</h3>
        <PetList pets={this.state.pets} getFavoritedPetsCount={this.getFavoritedPetsCount}
        />
      </div>
    );
  }
}

export default App;
