import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import PetsList from "./Components/PetsList";
import PetDetails from "./Components/PetDetails"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="sticky">
            <h1>Pets for Adoption</h1>

            <nav>
              <ul>
                <li>View all pets</li>
                <li className="nav-bar-favorites-button">
                  <p>Favorites</p>
                  <p>5</p>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/" exact component={PetsList} />
            <Route path="/:number" exact component={PetDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
