import React, { Component } from "react";
import Box from './Box.js';

class Grid extends Component {
    constructor(props){
        super(props);
        console.log(this.props.boxCount)
        this.state= {
            colors: Array.from({length: this.props.boxCount}).map(()=>this.generateRandomColor())
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        length: 4
    }
    
    generateRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';

        for (let i=0; i<6; i++) {
            color+=letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    handleClick(evt) {
        this.setState(function(state) {
            let randomIndex = Math.floor(Math.random()*this.props.boxCount);
            let newColors = [...state.colors];
            newColors[randomIndex] = this.generateRandomColor();
            return {colors: newColors}
        });
    }
    
    render() {
        return (
            <div>
                { this.state.colors.map(color => <Box color={color}/>) }
                <button onClick={this.handleClick}>Change</button>
            </div>
        );
    }
}

export default Grid;