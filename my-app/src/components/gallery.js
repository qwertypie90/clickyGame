import React, { Component } from 'react';
import characterz from './characterz.json';
import App from './App';

class Gallery extends Component {

        shuffle(values) {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }

        return values;
    }

handleClick(index, props) {
        // const currentCharacterInState = this.props.characters.slice();
        // const shuffledCharacter = this.shuffle(currentCharacterInState);
        // this.setState({ characters: shuffledCharacter });
        this.props.wow(index)
        //currentCharacterInState[index]['image'] = "http://via.placeholder.com/350x150";
            // const count = this.props.count
        // console.log("THIS WAS CLICKED", this.props.characters[index].name)
    }

    render() {
        let characters = this.props.characters;
        // console.log(characters)
        return (
            characters.map((character, index) => {
                return(

                    <div key={index}  onClick={ () => this.handleClick(index)} className="box">
                        <img alt={character.name} src={character.image} height="190px" width="190px" />
                    </div>
                )
            })
        )
    }
}


export default Gallery;