import React from 'react';
import { ReviewsPeople } from '../../../reviews/ReviewsPeople';
import "./reviews.scss";

export const Reviews = ({ review }) => {
    return (
        <div className="reviews" id="reviews">
            <ReviewsPeople review={review} />
        </div>
    )
}
