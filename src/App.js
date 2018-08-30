import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Pet from './Component/Pet'


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <h1>Pets for Adoption</h1>
        {/*  */}
        <nav>
          <ul>
            <li>View all pets</li>
            <li>Potential adoptees</li>
          </ul>
        </nav>
        {/*  */}
        {this.state.pets.map((pet, i) => {
          return  <Pet />
        })}
      </div>
      </Router>
    );
  }
}

export default App;
