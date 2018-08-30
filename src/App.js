import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }
  

  componentDidMount() {
    this.setState({
      pets: petData.petfinder.pets.pet
    });
    console.log(petData);
  }

  render() {
    return (
      <div className="App">
        <section className="App-header">
          <header>Pets for Adoption</header>
        </section>
        {/*  */}
        <nav>
          <ul>
            <li>Favorited Adoptees</li>
            <li>View All Pets</li>
          </ul>
        </nav>
        {/*  */}
        <section className="pets">
        {this.state.pets.map((pet, i) => {
          return (
            <section className="pet" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[3].$t} />
              <button>Favorite {pet.name.$t}</button>
            </section>
          );
        })}
        </section>
      </div>
    );
  }
}

export default App;
