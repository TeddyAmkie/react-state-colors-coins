import React, { Component } from "react";
import "./Box.css"

class Box extends Component {
    render() {
        return (
            <div id="box" style={{ backgroundColor: this.props.color, margin: 3, display: "inline-block"}}>

            </div>
        );
    }
}
export default Box;