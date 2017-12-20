import React from 'react';

let pad = (n) => (n < 10) ? ("0" + n) : n;
function renderDateDiff(dur){
    return `${dur.months()} Months, ${dur.days()} Days, and ${pad(dur.hours())}:${pad(dur.minutes())}:${pad(dur.seconds())}`
}

export default (props) => {
    return (
        <div>
            Seconds Left: {props.secondsLeft}
            <br />
            Time in hhmmss: {props.timeLeft.format("hh:MM:ss")} minutes
            <br />
            <br />
            
            Duration: {renderDateDiff(props.duration)}
            <br />
            Diff: {props.diff}
            
        </div>
    )
}

// var t1 = moment('05:34:01', "hh:mm:ss");
// var t2 = moment('20:44:44', "hh:mm:ss");
// var t3 = moment(t2.diff(t1)).format("hh:MM:ss");