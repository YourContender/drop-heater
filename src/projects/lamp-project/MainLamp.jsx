import React, { useState } from "react";
import { 
    imagesForLampSlider, 
    detailsForLamp, 
    equipmentForLamp,  
    reviewsForLampNew,
    prodTitle, 
    infoProd, 
    detailsTitle,
    sizeForLamp,
    nameProd,
    equipmentTitleForLamp,
    cost 
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
import './Mainlamp.scss';

export const MainLamp = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={detailsTitle}
                /> : null
            }
			<Header 
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
                title={detailsTitle}
                other={equipmentTitleForLamp}
            />
            <Order 
                cost={cost} 
                size={sizeForLamp}
                nameProduct="Акумуляторна лампа"
                orderPrice={379}
            />
            <Delivery 
                nameProduct="Акумуляторна лампа"
            />
			<Reviews 
                review={reviewsForLampNew} 
                title={prodTitle}
            />
            <Footer/>
		</div>
	);
};
