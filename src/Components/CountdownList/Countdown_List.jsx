import React from 'react';
import CountdownContainer from '../Countdown/Countdown_Container';

function renderCountdowns(countdowns){
    return countdowns.map((cd) => {
        return (
            <div>
                <CountdownContainer targetDateTime={cd.targetDateTime} />
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