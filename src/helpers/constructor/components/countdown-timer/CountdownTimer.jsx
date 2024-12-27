import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const initialTime = 3 * 60 * 60 + 59 * 60 + 59; // 8 часов, 59 минут, 59 секунд в секундах
    const [ time, setTime ] = useState(() => {
        const savedTime = localStorage.getItem("remainingTime");
        const savedTimestamp = localStorage.getItem("savedTimestamp");

        if (savedTime && savedTimestamp) {
            const elapsed = Math.floor((Date.now() - Number(savedTimestamp)) / 1000);
            const remainingTime = Math.max(0, Number(savedTime) - elapsed);
            
            return remainingTime;
        }
        return initialTime;
    });

    useEffect(() => {
        const timerId = setInterval(() => {
        setTime((prevTime) => {
            if (prevTime <= 0) {
                // Сбрасываем таймер на начальное значение
                localStorage.setItem("remainingTime", initialTime);
                localStorage.setItem("savedTimestamp", Date.now().toString());
                return initialTime;
            }

            const newTime = prevTime - 1;
            localStorage.setItem("remainingTime", newTime);
            localStorage.setItem("savedTimestamp", Date.now().toString());

            return newTime;
        });
        }, 1000);

        return () => clearInterval(timerId); // Очистка интервала
    }, []);

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hrs.toString().padStart(2, "0")}:${mins
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="timeout">
            До кінця акції: <span>{formatTime(time)}</span>
        </div>
    );
};

export default CountdownTimer;