import React from 'react';
import "./info.scss";

export const Info = ({ info, nameProd }) => {
  return (
    <div className="info" id="info">
        <h2>{nameProd}</h2>
        <span>
            {info}
        </span>
    </div>
  )
}
