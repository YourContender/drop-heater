import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';
import img6 from '../../img/img6.jpg';

export const Slider = () => {
    const images = [img1, img2, img3, img4, img5, img6,] 
    return (
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
                images.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={item} alt={index} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
