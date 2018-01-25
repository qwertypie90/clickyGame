import React, { Component } from 'react';


class Gallery extends Component {
    render() {
        let char = this.props.character;

        // const characterz = this.props; 
        // destructure the props with a default (not strictly necessary, but more convenient) 
            return (
                char.map(([key, item]) => {
                    return (
                        <div className="box" >
    <img data-name ={key} alt={item.name} src={item.image} height= "190px" width="190px" />
                        </div>
                    )
                })
            )

    }
}

export default Gallery;