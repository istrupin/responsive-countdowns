import React, { Component } from 'react';
import Countdown from './Countdown';
import moment from 'moment';


class CountdownContainer extends Component {
    constructor(props) {
        super(props);
        let dt = moment(props.targetDateTime);
        this.state = {
            timer: 0,
            secondsLeft: dt.diff(moment(),'seconds'),
            targetDateTime: dt,
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
        if(secondsLeft === 0) {
            clearInterval(timer);
        }
        this.setState({secondsLeft: this.state.targetDateTime.diff(moment(),'seconds')});
    }

    render() {
        return (
            <div>
                <Countdown secondsLeft={this.state.secondsLeft} duration={moment.duration(this.state.targetDateTime.diff(moment()))}  > </Countdown>
            </div>
        )
    }
}

export default CountdownContainer;