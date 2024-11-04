import React from 'react';
import "./info.scss";

export const Info = ({ info }) => {
  return (
    <div className="info" id="info">
        <h2>Опис:</h2>
        <span>
            {info}
        </span>
    </div>
  )
}
