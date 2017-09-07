import React, { Component } from 'react';
import Countdown from './Countdown';


class CountdownContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
            targetDatetime: [],
            secondsLeft: 5
        };


        this.countDown = this.countDown.bind(this);
        this.startTimer = this.startTimer.bind(this);
        
    }

    componentDidMount(){
        this.startTimer();
    }


    startTimer() {
        if(this.state.secondsLeft > 0 && this.state.timer === 0) {
            let timer = setInterval(this.countDown, 1000);
            this.setState({timer: timer});
        }
    }

    countDown(){
        console.log('called');
        let { secondsLeft, timer } = this.state; 
        secondsLeft--;
        if(secondsLeft === 0) {
            clearInterval(timer);
        }
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