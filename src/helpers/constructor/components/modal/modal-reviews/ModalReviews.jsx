import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { ratingStars } from '../../../../../data';
import "./modalReviews.scss";

export const ModalReviews = ({ setOpenModal }) => {
    const [changeStar, setChangeStar] = useState(0);
    const [rating, setRating] = useState(ratingStars);
    const [name, setName] = useState("");
    const [review, setReview] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeReview = (e) => {
        setReview(e.target.value);
    }

    const sendReview = async() => {
        const data = {
            rating: changeStar,
            name: name,
            review: review
        }

        await fetch('https://654d3af877200d6ba85a2a97.mockapi.io/reviews', {
            method: 'POST',
            body: JSON.stringify({
                ...data
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        setOpenModal(false);
        setName("");
        setReview("");
        setChangeStar(0);
    }

    useEffect(() => {
        if (changeStar !== 0) {
            let newArray = ratingStars.map((item, index) => {
                if (index < changeStar) {
                    item.class = "star yellow"
                } else {
                    item.class = "star"
                }
            })
            setRating(newArray);
        }
    }, [changeStar])

    return (
        <div className="modal-reviews">
            <FontAwesomeIcon 
                className="modal-tel-close" 
                icon={faXmark} 
                onClick={() => setOpenModal(false)}
            />

            <h2>Додати відгук на товар "Акумуляторна лампа для кемпінгу CG-30W 3000mAh"</h2>
            
            <div className="modal-reviews-stars">
                {
                    ratingStars.map((item, index) => {
                        return (
                            <FontAwesomeIcon 
                                key={index} 
                                icon={faStar} 
                                className={item.class} 
                                onClick={() => setChangeStar(item.star)}/>
                        )
                    })
                }
            </div>

            <div className="modal-reviews-text">
                <textarea 
                    onChange={(e) => changeReview(e)} 
                    placeholder="Ваш відгук"/>
                <input 
                    onChange={(e) => changeName(e)} 
                    placeholder="Ваше ім'я" 
                    type="text" 
                />
            </div>

            <div className="modal-reviews-send">
                <button onClick={sendReview}>Відправити</button>
            </div>
        </div>
    )
}
