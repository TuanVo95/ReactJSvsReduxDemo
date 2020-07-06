import React, { useState, useEffect } from 'react';

function formatDate(date)
{
    const hours =   `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function useClock(props) {
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

    return {timeString};
}
export default useClock;