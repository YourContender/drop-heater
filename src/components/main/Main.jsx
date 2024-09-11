import { useState } from 'react';
import { Burger } from './burger/Burger.jsx';
import { Slider } from '../../helper/slider/Slider.jsx';
import './Main.scss';
import { scrollToSection } from '../../helper/scroll/scrollToSection.jsx';

export const Main = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="main">
			<div className="main-left">
				<h1>Обігрівач газовий з керамічним нагрівальним елементом <span>1,3 кВт</span></h1>
			</div>

			<div className="main-middle">
				<Slider/>
			</div>

			<div className="main-right">
				<span className="desktop" onClick={() => scrollToSection("descr")}>Опис</span>
				<span className="desktop" onClick={() => scrollToSection("details")}>Характеристики</span>
				<span className="desktop" onClick={() => scrollToSection("order")}>Замовити</span>
				<a 
					className="desktop" 
					href="https://t.me/your_contender"
              		target="_blank"
				>
					Написати нам
				</a>

				<div className="burger" onClick={() => setOpenBurger(!openBurger)}>
					<span></span>
				</div>

				{
					openBurger ? <Burger setOpenBurger={setOpenBurger}/> : null
				}
			</div>
		</div>
	);
};
