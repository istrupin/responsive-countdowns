import React from 'react';
import CountdownContainer from '../Countdown/Countdown_Container';

function renderCountdowns(countdowns){
    return countdowns.map((cd) => {
        return (
            <div>
                <h1>Countdown</h1>
                <CountdownContainer targetDateTime={cd.targetDateTime} />
            <hr/>
            </div>
        );
    });
}

export default (props) => {
    return (
        <div>
            {renderCountdowns(props.countdowns)}
        </div>
    )
}