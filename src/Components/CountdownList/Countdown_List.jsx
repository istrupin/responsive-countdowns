import React from 'react';
import CountdownContainer from '../Countdown/Countdown_Container';

function renderCountdowns(countdowns){
    return countdowns.map((cd) => {
        return (
            <div>
                <CountdownContainer targetDateTime="2017-09-25 09:30:00" />
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