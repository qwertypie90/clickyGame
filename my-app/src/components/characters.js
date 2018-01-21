import React, { Component } from 'react';
import characterz from './characterz.json';



class Gallery extends React.Component {

    render() {
        // const characterz = this.props; // destructure the props with a default (not strictly necessary, but more convenient) 

        return (
 Object.entries(characterz).map(([key, item]) => {
        console.log(key)
        console.log(item)
        return (
<div className="box">
<img data-name ={key} alt={item.name} src={item.image} height= "190px" width="190px"/>
</div>
        )
    })
)

    }
}




export default Gallery;