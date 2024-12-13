import React, { useState, useEffect } from "react";
import "./timer.scss";
import time from "../../images/custom-prod/time.png";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Сохраняем конечное время в localStorage
    const savedEndTime = localStorage.getItem("endTime");
    const endTime = savedEndTime ? new Date(savedEndTime) : new Date();
    if (!savedEndTime) {
        endTime.setHours(endTime.getHours() + 4, endTime.getMinutes() + 30, endTime.getSeconds());
        localStorage.setItem("endTime", endTime.toISOString());
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
                clearInterval(interval);
                localStorage.removeItem("endTime");
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
            {/* <img src={time} alt="" /> */}
            <span>До кінця акції:</span>
        </div>
        <div className="timer-down"> 
            <div className="timer-down-item">
                <div style={{ fontSize: "23px" }}>{hours}</div>
                <div className="timer-down-text">годин</div>
            </div>
            <div className="timer-down-item">
                <div style={{ fontSize: "23px" }}>{minutes}</div>
                <div className="timer-down-text">хвилин</div>
            </div>
            <div className="timer-down-item">
                <div style={{ fontSize: "23px" }}>{seconds}</div>
                <div className="timer-down-text">секунд</div>
            </div>
        </div>
    </div>
  );
};

export default Timer;
