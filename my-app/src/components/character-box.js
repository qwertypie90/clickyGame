import React, { Component } from 'react';
import Gallery from './characters.js';
import "../style/App.css";

class CharacterBox extends Component { 

render() { 
	return (
		<div> 
			<Gallery /> 
		</div>
		); 
	} 
}

export default CharacterBox;