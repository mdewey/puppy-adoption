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
        _favoritePets = _favoritePets ? _favoritePets.split('@@@') : []
        console.log(_favoritePets.length)
        _favoritePets.filter(_favoritePet => _favoritePet !== this.props.pet)
        _favoritePets.setItem('favoritePets', _favoritePets)
    }

    savePetToFavorites = () => {
        let _favoritePets = localStorage.getItem('favoritePets')
        _favoritePets = _favoritePets ? _favoritePets.split('@@@') : []
        let _newPet = JSON.stringify(this.props.pet) + '@@@'
        _favoritePets.push(_newPet)
        localStorage.setItem('favoritePets', _favoritePets)
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
