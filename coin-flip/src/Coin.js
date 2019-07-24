import React, { Component } from "react";

// Renders coin image.
class Coin extends Component {
    render() {
        const coin = { heads: "https://upload.wikimedia.org/wikipedia/commons/c/c8/1849_%2420_Liberty_Head_double_eagle_pattern_%28obverse%29.jpg", 
        tails: "https://upload.wikimedia.org/wikipedia/commons/8/82/1849_%2420_Liberty_Head_double_eagle_pattern_%28reverse%29.jpg"}
        return (
            <img src={coin[this.props.result]} alt="coin" style={{maxWidth: 150,maxHeight: "auto"}}></img>
        );
    }
}
export default Coin;