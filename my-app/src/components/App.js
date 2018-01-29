import React, { Component } from 'react';
import logo from './logo.svg';
import '../style/App.css';
import CharacterBox from './character-box'
import Counter from './scoreboard'
import characterz from './characterz.json';
import Gallery from './gallery';

class App extends Component {

    constructor(props) {
        super(props);
        this.wow = this.wow.bind(this);
        this.state = {
            characters: [],
            count: 0,
            first: [],
            second: [],
            score: 0
        };
    }

    componentDidMount() {
        this.setState({ characters: characterz });
    }

        shuffle(values) {
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }

        return values;
    }


    wow(index) {
        const currentCharacterInState = this.state.characters.slice();
        const shuffledCharacter = this.shuffle(currentCharacterInState);
        this.setState({ characters: shuffledCharacter });
        //currentCharacterInState[index]['image'] = "http://via.placeholder.com/350x150"
        this.state.count++
        const count = this.state.count
        // console.log(count)
        // const score; 
        console.log("THIS WAS CLICKED", this.state.characters[index].name)

        if (count === 1) {
            console.log("Clicked Once")
            this.state.first = this.state.characters[index].name
        } else if (count === 2) {
            this.state.second = this.state.characters[index].name
            this.state.count = { count: 0 }
            console.log("Count = " + count)

            if (this.state.first === this.state.second) {
                this.state.score++
                    this.state.count = 0
                console.log("score is " + this.state.score)
                console.log("clickCount is reset to " + this.state.count)
            } else {
                this.state.score = 0
                this.state.count = 0
                console.log("score is " + this.state.score)

            }
        }
    }



    render() {
        return (
            <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game</h1>
        </header>
        
        <Counter score = {this.state.score}/> 
         <Gallery  characters = { this.state.characters }
                    wow = {this.wow} />

      </div>
        );
    }
}

export default App;