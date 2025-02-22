import React, {Component } from 'react';


export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    updateButton = () => {
        this.setState(state => {
            return {
                timesClicked: state.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.updateButton}>{this.state.timesClicked}</button>
        )
    }
}