import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import none from "../../../img/logos/none.png";

export const Review = ({ item }) => {
    return (
        <div className="reviews_rating-comment">
            <div className="reviews_rating-comment-img">
                <img src={none} alt="" />
            </div>
            <div className="reviews_rating-comment-data">
                <div className="reviews_rating-comment-data-star">
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                    <FontAwesomeIcon className="star" icon={faStar} />
                </div>
                <div className="reviews_rating-comment-data-name">
                    <h2>{item.name}</h2> 
                </div>
                <div className="reviews_rating-comment-data-text">
                    <span>
                        {item.text}
                    </span>
                </div>
            </div>
        </div>
    )
}
