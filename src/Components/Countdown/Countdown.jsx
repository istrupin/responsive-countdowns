import React from 'react';

export default (props) => {
    return (
        <div>
            Seconds Left: {props.secondsLeft}
            <br />
            duration: {props.timeLeft.humanize()} and {props.timeLeft.asHours().toFixed(0)} hours and {props.timeLeft.asMinutes().toFixed(0)} minutes
        </div>
    )
}

// var t1 = moment('05:34:01', "hh:mm:ss");
// var t2 = moment('20:44:44', "hh:mm:ss");
// var t3 = moment(t2.diff(t1)).format("hh:mm:ss");