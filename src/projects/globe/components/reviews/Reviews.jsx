import React from 'react';
import { reviewsForGlobe } from '../../../../data';
import { ReviewsPeople } from '../../../../helpers/reviews/ReviewsPeople';
import "./reviews.scss";

export const Reviews = () => {
    return (
        <div className="reviews" id="reviews">
            <ReviewsPeople reviewsForGlobe={reviewsForGlobe} />
        </div>
    )
}
