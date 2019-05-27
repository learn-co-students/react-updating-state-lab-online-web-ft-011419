import React, {Component} from 'react';

class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementButton = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return (
            <button onClick={this.incrementButton}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker