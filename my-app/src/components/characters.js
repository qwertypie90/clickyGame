import React, { Component } from 'react';
import characterz from './characterz.json';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = { character: [] };
    }

    componentDidMount() {
        this.setState({ character: characterz });
    }

    /**
     * Array shuffler found here https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
     * @param {*} values 
     */
    shuffle(values) {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }

        return values;
    }

    handleClick(index) {
        console.log("THIS WAS CLICKED", this.state.character[index])
        // To change image of clicked box
        const currentCharacterInState = this.state.character.slice();
        //currentCharacterInState[index]['image'] = "http://via.placeholder.com/350x150";
        const suffledCharacter = this.shuffle(currentCharacterInState);
        this.setState({character: suffledCharacter});
    }

    render() {
        let characters = this.state.character;
        console.log(characters)

        // const characterz = this.props; 
        // destructure the props with a default (not strictly necessary, but more convenient) 
        return (
            characters.map((character, index) => {
                return(
                    <div key={index}  onClick={() => this.handleClick(index)} className="box">
                        <img alt={character.name} src={character.image} height="190px" width="190px" />
                    </div>
                )
            })
        )
    }
}

export default Gallery;