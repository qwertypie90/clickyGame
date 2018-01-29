import React, { Component } from 'react';

class Counter extends React.Component {
	
    render() {
        return (
     <p className="App-intro">
				BOO, YOU SCORE: {this.props.score}
				</p>
                
        );
    }
}


export default Counter;