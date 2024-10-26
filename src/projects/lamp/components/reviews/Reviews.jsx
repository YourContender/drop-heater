import React from 'react';
import { reviewsForLamp } from '../../../../data';
import { ReviewsPeople } from '../../../../helpers/reviews/ReviewsPeople';
import "./reviews.scss";

export const Reviews = () => {
    return (
        <div className="reviews" id="reviews">
            <ReviewsPeople reviewsForGlobe={reviewsForLamp} />
        </div>
    )
}
