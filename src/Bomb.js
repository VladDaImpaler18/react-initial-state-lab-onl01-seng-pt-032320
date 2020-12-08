import React, { Component } from 'react'

class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount 
        }
    }
    render() {
        const remainingSeconds = this.state.secondsLeft;
        const message = remainingSeconds !== 0 ? `${remainingSeconds} seconds left before I go boom!`: "Boom!";
        return (
            <div>
                { message }
            </div>
        )
    }
}
export default Bomb
