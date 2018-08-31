import React, { Component } from 'react';
import Pet from './Pet'

class PetList extends Component {
    render() {
        return (
            <section className="pets">
                {this.props.pets.map((pet, i) => {
                    return <Pet pet={pet} getFavoritedPetsCount={this.props.getFavoritedPetsCount} key={i}/>
                })}
            </section>
        );
    }
}

export default PetList;
