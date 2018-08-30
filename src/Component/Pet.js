import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import petData from '../Data/pet.json'

class Pet extends Component {
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
<div>
{this.state.pets.map((pet, i) => {
          return <Link>
            <section className="pet-list" key={i}>
              <header>{pet.name.$t}</header>
              <img src={pet.media.photos.photo[3].$t} />
              <button>Save for Later! Arf!</button>
            </section>
            </Link>
        })}
</div>
        );
    }
}

export default Pet;
