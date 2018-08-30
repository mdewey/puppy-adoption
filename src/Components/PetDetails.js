import React, { Component } from 'react';
import petData from "../Data/pet.json";

class PetsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: {
                name: '',
                sex: '',
                age: '',
                size: '',
                description: '',
                breeds: {
                    breed: ''
                },




           
 
            }
        }
    }
    

componentDidMount() {
    const specificPet = petData.petfinder.pets.pet[this.props.match.params.number]
    console.log(specificPet)
    this.setState({
        pet: specificPet
    })
}


    render() {
        return (
            <section className='pet-details'>
                <h1>Name: {this.state.pet.name.$t}</h1>
                <p>Breed: {this.state.pet.breeds.breed.$t}</p>
                <p>Sex: {this.state.pet.sex.$t}</p>
                <p>Age: {this.state.pet.age.$t}</p>
                <p>Size: {this.state.pet.size.$t}</p>
                <img src={petData.petfinder.pets.pet[this.props.match.params.number].media.photos.photo[3].$t} />
                <h4>Description: {this.state.pet.description.$t}</h4>
            </section>    
        );
    }
}

export default PetsDetails;
