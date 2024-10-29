import React, { useState, useEffect } from 'react';
import './Timer.css'

const CountdownTimer = ({ title,targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            // Если дата уже прошла, можно вернуть 0
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () =>  clearInterval(timer); // Очистка таймера при размонтировании
    }, [calculateTimeLeft]);

    return (
        <div className="timer">
            <h2 className="timer-title">{title}</h2>
            <div className="timer-content">
                <p>{timeLeft.days} дней {timeLeft.hours} часов {timeLeft.minutes} минут {timeLeft.seconds} секунд</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
