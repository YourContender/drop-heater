import React, { useState, useEffect } from "react";
import "./TimerBlock.scss";

const TimerBlock = ({ text }) => {
    const resetTimer = () => {
        const newEndTime = new Date();
        newEndTime.setHours(newEndTime.getHours() + 4, newEndTime.getMinutes() + 30, newEndTime.getSeconds());
        localStorage.setItem("endTime", newEndTime.toISOString());
        return newEndTime.getTime() - Date.now();
    };

    const [timeLeft, setTimeLeft] = useState(() => {
        const savedEndTime = localStorage.getItem("endTime");
        const endTime = savedEndTime ? new Date(savedEndTime) : null;

        if (!endTime || endTime <= new Date()) {
            return resetTimer(); // Сбрасываем таймер, если он истёк или не существует
        }

        return Math.max(0, endTime.getTime() - Date.now());
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const savedEndTime = localStorage.getItem("endTime");
            if (savedEndTime) {
                const endTime = new Date(savedEndTime);
                const timeLeft = Math.max(0, endTime.getTime() - Date.now());
                setTimeLeft(timeLeft);

                if (timeLeft <= 0) {
                    setTimeLeft(resetTimer()); // Сбрасываем таймер, когда он достигает 0
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="timer" style={{ display: "flex", gap: "10px", textAlign: "center" }}>
            <div className="timer-title">
                <span>До кінця акції залишилось:</span>
            </div>
            <div className="timer-down">
                <div className="timer-down-item">
                    <div style={{ fontSize: "30px" }}>{hours}</div>
                    <div className="timer-down-text">годин</div>
                </div>
                <div className="timer-down-item">
                    <div style={{ fontSize: "30px" }}>{minutes}</div>
                    <div className="timer-down-text">хвилин</div>
                </div>
                <div className="timer-down-item">
                    <div style={{ fontSize: "30px" }}>{seconds}</div>
                    <div className="timer-down-text">секунд</div>
                </div>
            </div>
            <div className="timer-message">
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default TimerBlock;