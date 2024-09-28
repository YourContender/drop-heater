import React from 'react';
import "./Info.scss";

export const Info = () => {
  return (
    <div className="info">
        <div className="info-container">
            <div className="info-container-text">
                <h3>
                    Також, Ви можете зробити замовлення написавши нам в наш Телеграм, для цього натисніть "Написати нам" 
                </h3>

            </div>

            <a
              href="#"
              target="_blank"
            >
              Написати нам
            </a>
        </div>
    </div>
  )
}
