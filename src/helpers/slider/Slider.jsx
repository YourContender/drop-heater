import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.scss";

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export const Slider = ({ data }) => {
    return (
        <div className="slider">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={item} alt={index} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}
