import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
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
        <header>
        <h1>Pets for Adoption</h1>
       
        <nav>
          <ul>
            <li>View all pets</li>
            <li>Potential adoptees</li>
          </ul>
        </nav>
        </header>
        
        <section className="pets-list">
          {this.state.pets.map((pet, i) => {
            return (
              <section className="pet-display" key={i}>
                <h3>{pet.name.$t}</h3>
                <img src={pet.media.photos.photo[3].$t} />
                <button>Save for Later!</button>
              </section>
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
