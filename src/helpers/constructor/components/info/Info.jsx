import React from 'react';
import "./info.scss";

export const Info = ({ info, nameProd }) => {
  return (
    <div className="info" id="info">
        <h2 className="info-title">Теплий плюшевий костюм <span>преміум</span> якості</h2>
        <span>
            {info}
        </span>
    </div>
  )
}
