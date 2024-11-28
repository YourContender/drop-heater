import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalReviews } from '../modal/modal-reviews/ModalReviews';
import { ratingStars } from '../../../../data';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./reviews.scss";
import { Review } from './review/Review';

export const Reviews = ({ review, title }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="reviews" id="reviews">
            <div className="reviews_title">
                <h2>Відгуки ({review.length})</h2>
            </div>

            <div className="reviews_rating">
                <div className="reviews_rating-star">
                    <span className="reviews_rating-star-num">5.00</span>
                    <span>
                        {
                            ratingStars.map((item, index) => {
                                return <FontAwesomeIcon className="star" icon={faStar} key={index} />
                            })
                        }
                    </span>
                    <span>7 відгуків</span>
                </div>
                <div className="reviews_rating-line">
                    <div className="reviews_rating-line-item">
                        <span>5 <FontAwesomeIcon className="star" icon={faStar} /></span>
                        <span className="line-green"></span>
                        <span>7</span>
                    </div>
                    <div className="reviews_rating-line-item">
                        <span>4 <FontAwesomeIcon className="star" icon={faStar} /></span>
                        <span className="line"></span>
                        <span>0</span>
                    </div>
                    <div className="reviews_rating-line-item">
                        <span>3 <FontAwesomeIcon className="star" icon={faStar} /></span>
                        <span className="line"></span>
                        <span>0</span>
                    </div>
                    <div className="reviews_rating-line-item">
                        <span>2 <FontAwesomeIcon className="star" icon={faStar} /></span>
                        <span className="line"></span>
                        <span>0</span>
                    </div>
                    <div className="reviews_rating-line-item">
                        <span>1 <FontAwesomeIcon className="star" icon={faStar} /></span>
                        <span className="line"></span>
                        <span>0</span>
                    </div>
                </div>

                <div className="reviews_rating-btn">
                    <button onClick={() => setOpenModal(true)}>Написати відгук</button>
                </div>
            </div>

            {openModal ? <ModalReviews setOpenModal={setOpenModal} title={title}/> : null}

            {
                review.map((item, index) => {
                    return (
                        <Review item={item} key={index}/>
                    )
                })
            }
        </div>
    )
}
