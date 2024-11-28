import React, { useState } from "react";
import { 
    sizeForGoose, 
    prodTitleGoose, 
    costGoose,  
    infoGoose,
    imagesForGooseSlider, 
    detailsTitleGoose, 
    detailsForGoose,
    equipmentForGoose,
    equipmentTitleForGoose,
    reviewsForGoose
} from "../../data";
import { Header } from "../../helpers/constructor/components/header/Header";
import { Main } from "../../helpers/constructor/components/main/Main";
import { Details } from "../../helpers/constructor/components/details/Details";
import { Info } from "../../helpers/constructor/components/info/Info";
import { Order } from "../../helpers/constructor/components/order/Order";
import { Reviews } from "../../helpers/constructor/components/reviews/Reviews";
import { Modal } from "../../helpers/constructor/components/modal/Modal";
import { Marquee } from "../../helpers/constructor/components/marquee/Marquee";
import { Delivery } from "../../helpers/constructor/components/delivery/Delivery";
import { Footer } from "../../helpers/constructor/components/footer/Footer";
import './MainGoose.scss';

export const MainGoose = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger} title={detailsTitleGoose}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
			<Main 
                images={imagesForGooseSlider}
            />
            <Marquee cost={costGoose} />
            <Info 
                info={infoGoose}
                nameProd={prodTitleGoose}
            />
			<Details 
                details={detailsForGoose} 
                equipment={equipmentForGoose}
                title={detailsTitleGoose}
                other={equipmentTitleForGoose}
            />
            <Order 
                cost={costGoose} 
                size={sizeForGoose}
                nameProduct="Гусь-обіймусь 110 см"
                orderPrice={599}
            />
            <Delivery nameProduct="Гусь-обіймусь 110 см"/>
			<Reviews review={reviewsForGoose} title={prodTitleGoose}/>
            <Footer/>
		</div>
	);
};
