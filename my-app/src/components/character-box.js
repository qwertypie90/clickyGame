import React, { Component } from 'react';
import Gallery from './characters.js';
import characterz from './characterz.json';
import "../style/App.css";


class CharacterBox extends Component {

    constructor(props) {
        super(props);
        this.state = { character: characterz };
    }

    componentDidMount() {
        //this.setState({ character: characterz });
    }

    render () {
    	return(
			<div>
				<Gallery character={this.state.character} />
			</div>
		);
    }
}

export default CharacterBox;
