import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};

function formatDate(date)
{
    const hours =   `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
    const [timeString,setTimeString] = useState('');
    useEffect(()=>{
      const clockinterval =  setInterval(() => {
            const now = new Date();
            const newtimeString = formatDate(now);
            setTimeString(newtimeString);
        }, 1000);
        return ()=> 
        {
            //clean up
            console.log('Clock Clean up');
            clearInterval(clockinterval);
        }
    },[]);

    return (
        <div>
            <p style={{fontSize:'42px'}} >{timeString}</p>
        </div>
    );
}
export default Clock;