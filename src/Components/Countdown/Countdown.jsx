import React from 'react';

export default (props) => {
    return (
        <div>
            Seconds Left: {props.secondsLeft}
            <br />
            duration: {props.duration.humanize()} and {props.duration.asHours().toFixed(0)} hours and {props.duration.asMinutes().toFixed(0)} minutes
        </div>
    )
}