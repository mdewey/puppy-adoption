import React, { Component } from "react";
import "./App.css";
import petData from "./Data/pet.json";
import Pet from "./Components/Pet";

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
            return <Pet pet={pet} key={i} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;
