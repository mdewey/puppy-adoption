import React, { Component } from "react";
import PetList from './Components/PetList'
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
        <PetList pets={this.state.pets}/>
      </div>
    );
  }
}

export default App;
