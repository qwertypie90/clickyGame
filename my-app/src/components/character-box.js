import React, { Component } from 'react';
import Gallery from './gallery';
import "../style/App.css";
import App from './App';

class CharacterBox extends Component { 

render() { 
	return (
		<div> 
			<Gallery {...this.props.characters } /> 
		</div>
		); 
	} 
}

export default CharacterBox;