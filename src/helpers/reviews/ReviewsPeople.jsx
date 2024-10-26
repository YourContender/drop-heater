import React from 'react'

export const ReviewsPeople = ({ reviewsForGlobe }) => {
    return (
        reviewsForGlobe.map((item, index) => {
            return (
                <div className="reviews-item" key={index}>
                    <div className="reviews-item-user">
                        <img src={item.img} alt="" />
                        <div className="reviews-item-user-info">
                            <span className="name">{item.name}</span>
                            <span>{item.star}</span>
                        </div>
                    </div>
                    <div className="reviews-item-text">
                        <span>
                            {item.text}
                        </span>
                    </div>
                </div>
            )
        })
    )
}
