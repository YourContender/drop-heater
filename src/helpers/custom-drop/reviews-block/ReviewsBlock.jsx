import React from 'react';
import empty from "./empty.jpg";
import reviewImg from "./review-img.png";
import "./ReviewsBlock.scss";

export const ReviewsBlock = ({reviews}) => {
    return (
        <div className="reviews">
            <div className="reviews__container">
                <div className="reviews__container-title">
                    <h1>Відгуки покупців</h1>
                </div>
                <div className="reviews__container-cards">
                    {
                        reviews.map(item => {
                            return (
                                <div className="reviews__container-cards-item" key={item.id}>
                                    <img className="review-image" src={reviewImg} alt="" />
                                    <div className="reviews__container-cards-item-user">
                                        <div className="reviews__container-cards-item-user-image">
                                            <img src={empty} alt="" />
                                        </div>
                                        <div className="reviews__container-cards-item-user-data">
                                            <span className="user-data-name">{item.name}</span>
                                            <span className="user-data-city">{item.city}</span>
                                        </div>
                                    </div>
                                    <div className="reviews__container-cards-item-text">
                                        <span className="text-subtitle">Оцінка покупця: </span>
                                        <span className="text-review">{item.text}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
