// Clock.js

import React, { useState, useEffect } from 'react';
import './Clock.css'; // Importing CSS file for styling

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12 || 12;

    return (
        <div className="centered-container">
            <div className="clock-container">
                <div className="clock-box">
                    <div className="clock-digits">{hours < 10 ? '0' + hours : hours}</div>
                    <div className="clock-label">Hours</div>
                </div>
                <div className="clock-box">
                    <div className="clock-digits">{minutes < 10 ? '0' + minutes : minutes}</div>
                    <div className="clock-label">Minutes</div>
                </div>
                <div className="clock-box">
                    <div className="clock-digits">{seconds < 10 ? '0' + seconds : seconds}</div>
                    <div className="clock-label">Seconds</div>
                </div>
                <div className="ampm">{ampm}</div>
            </div>
        </div>
    );
};

export default Clock;
