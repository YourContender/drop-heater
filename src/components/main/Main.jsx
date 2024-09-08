import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'
import img5 from '../../img/img5.jpg'
import img6 from '../../img/img6.jpg'
import burger from '../../img/menu.jpg'

import './Main.scss';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Burger } from './burger/Burger.jsx';

export const Main = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="main">
			<div className="main-left">
				<h1>Обігрівач газовий з керамічним нагрівальним елементом <span>1,3 кВт</span></h1>
			</div>
			<div className="main-middle">
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
					<SwiperSlide>
						<img src={img1} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img2} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img3} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img4} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img5} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={img6} alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="main-right">
				<span className="desktop">Опис</span>
				<span className="desktop">Характеристики</span>
				<span className="desktop">Замовити</span>
				<span className="desktop">Написати нам</span>

				<div className="burger">
					<img onClick={() => setOpenBurger(true)} src={burger} alt="" />
				</div>

				{
					openBurger ? <Burger setOpenBurger={setOpenBurger}/> : null
				}
			</div>
		</div>
	);
};
