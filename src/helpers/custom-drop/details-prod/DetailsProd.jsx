import React from 'react';
import "./DetailsProd.scss";

export const DetailsProd = () => {
    return (
        <div className="details-wrapper">
            <div className="details-wrapper-title">
                <h2>Характеристики</h2>
            </div>
            <div className="details-wrapper-list">
                <div className="details-wrapper-list-item special">
                    <span>Модель тренажера: </span>
                    <span className="descr">Міні тренажер; домашній; багатофункціональний</span>
                </div>
                <div className="details-wrapper-list-item">
                    <span>Система навантаження: </span>
                    <span className="descr">Механічна; аеродинамічна; ремінна</span>
                </div>
                <div className="details-wrapper-list-item special">
                    <span>Розмір:</span>
                    <span className="descr">60 х 30 х 3 см</span>
                </div>
                <div className="details-wrapper-list-item">
                    <span>Максимальна вага:</span>
                    <span className="descr">150 кг</span>
                </div>
                <div className="details-wrapper-list-item special">
                    <span>Матеріал:</span>
                    <span className="descr">Пластик</span>
                </div>
            </div>
            <div className="details-wrapper-btn">
                <button>Замовити</button>
            </div>
        </div>
    )
}
