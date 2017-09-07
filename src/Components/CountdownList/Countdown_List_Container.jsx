import React, { Component } from 'react';
import CountdownList from './Countdown_List'

class CountdownListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countdowns: [1,2]
        };
    }

    render() {
        return (
            <div>
                <CountdownList countdowns={this.state.countdowns} />
            </div>
        )
    }
}

export default CountdownListContainer;