import React, { useState } from "react";
import { 
    imagesForLampSlider, 
    detailsForLamp, 
    equipmentForLamp,  
    reviewsForLampNew,
    prodTitle, 
    infoProd, 
    sizeForLamp,
    nameProd,
    cost,
    lamp 
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
import orderPhoto from "../../helpers/images/slider-lamp/1.jpg";
import './Mainlamp.scss';

export const MainLamp = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger}/> : null}
			<Header 
                lamp={lamp}
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                nameProd={nameProd}
            />
			<Main 
                images={imagesForLampSlider}
            />
            <Marquee cost={cost} />
            <Info 
                info={infoProd}
                nameProd={prodTitle}
            />
			<Details 
                details={detailsForLamp} 
                equipment={equipmentForLamp}
            />
            <Order 
                cost={cost} 
                size={sizeForLamp}
                nameProduct="Акумуляторна лампа"
                orderPhoto={orderPhoto}
                orderPrice={379}
            />
            <Delivery/>
			<Reviews review={reviewsForLampNew}/>
            <Footer/>
		</div>
	);
};
