import React, { Component } from 'react';
import Countdown from './Countdown';


class CountdownContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            targetDatetime: [],
            secondsLeft: 5
        };


        this.countDown = this.countDown.bind(this);
        this.startTimer = this.startTimer.bind(this);
        
    }

    componentDidMount(){
        this.startTimer();
    }

    componentDidUpdate(){
        this.startTimer();
        console.log('mnt');
    }

    startTimer() {
        if(this.state.secondsLeft > 0) {
            setTimeout(this.countDown, 1000);
        }

    }

    countDown(){
        console.log('called');
        let { secondsLeft } = this.state; 
        secondsLeft--;
        this.setState({secondsLeft: secondsLeft});
    }

    render() {
        return (
            <div>
                <Countdown secondsLeft={this.state.secondsLeft} > </Countdown>
            </div>
        )
    }
}

export default CountdownContainer;