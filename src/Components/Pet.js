import React, { Component } from 'react';

class Pet extends Component {
    constructor(props) {
        super(props);
        this.state={
            isFavorited: false
        }
    }
    

    removePetFromFavorites = () => {
        let _favoritePets = localStorage.getItem('favoritePets')
        // Parsing the JSON string back into its original form... an array of pet objects.
        _favoritePets = _favoritePets ? JSON.parse(_favoritePets) : []
        // Have to set _favoritePets equal to the filter function because filter returns an array.
        // Also comparing by ID instead of the whole object because doing a deep compare on objects 
        // is computationally expensive
        _favoritePets = _favoritePets.filter(_favoritePet => _favoritePet.id.$t !== this.props.pet.id.$t)
        // Turning the array of pet objects into a JSON string before setting it to local storage.
        localStorage.setItem('favoritePets', JSON.stringify(_favoritePets))
    }

    savePetToFavorites = () => {
        let _favoritePets = localStorage.getItem('favoritePets')
        _favoritePets = _favoritePets ? JSON.parse(_favoritePets) : []
        _favoritePets = _favoritePets.concat(this.props.pet)
        localStorage.setItem('favoritePets', JSON.stringify(_favoritePets))
    }

    toggleIsFavorite = () => {
        this.setState({
            isFavorited: !this.state.isFavorited
        })
    }

    favoritePetEventHandler = () => {
        if (this.state.isFavorited) {
            this.removePetFromFavorites()
        }
        else {
            this.savePetToFavorites()
        }
        this.toggleIsFavorite()
    }

    render() {
        return (
            <section className="pet">
                <header>
                    {this.props.pet.name.$t}
                </header>
                <img 
                src={this.props.pet.media.photos.photo[3].$t} 
                alt={this.props.pet.name.$t}
                />
                <button 
                onClick={this.favoritePetEventHandler}>
                    Favorite {this.props.pet.name.$t}
                </button>
            </section>
        );
    }
}

export default Pet;
