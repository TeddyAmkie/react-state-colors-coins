import React, { Component } from "react";
import Coin from './Coin.js';

// Manages state for coin flips and rendering Coin and data.
class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinSide: "heads",
            headCount: 0,
            tailCount: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    // Randomly selects heads or tails and updates the state and head or tail count
    handleClick() {
        let flip = Math.floor(Math.random() * 2);
        this.setState(function (st) {
            if (flip === 0) {
                return {
                    coinSide: "heads",
                    headCount: ++st.headCount
                }
            } else {
                return {
                    coinSide: "tails",
                    tailCount: ++st.tailCount
                }
            }
        });
    }
    render() {
        return (
            <div>
                <div>
                    <Coin result={this.state.coinSide} />
                </div>
                <button onClick={this.handleClick}>Flip</button>
                <p> Out of {(this.state.headCount + this.state.tailCount)} flips, there have been {this.state.headCount} heads and {this.state.tailCount} tails.</p>
            </div >
        );
    }
}

export default CoinFlipper;