import React, { Component } from 'react';
import CountdownList from './Countdown_List'

class CountdownListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countdowns: [
                {
                    targetDateTime: '2017-09-25 09:30:00'
                }, 
                {
                    targetDateTime: '2017-09-29 23:24:012'
                }]
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