import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentTime = () => {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds()
        }
    }
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    const [ticks, setTicks] = useState(1);

    useEffect(() => {
       const intervalId =setInterval(() => {
            setCurrentTime(getCurrentTime());
            setTicks((currentTick) => currentTick + 1);
       }, 1000);
        
        return () => { clearInterval(intervalId); }
    }, []);

    // useEffect(() => {
    //     setTicks(ticks+1);
    // }, [currentTime])


    
    return (ticks%10===0?null:
        <Clock
            title={`ex04: Clock Component II: ${ticks}`}
            hours={currentTime.hours}
            minutes={currentTime.minutes}
            seconds={currentTime.seconds} />
    );
}