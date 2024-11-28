import React, { useState } from "react";
import { 
    sizeForKnife, 
    prodTitleKnife, 
    costKnife,  
    infoKnife,
    imagesForKnifeSlider, 
    detailsTitleKnife, 
    detailsForKnife,
    equipmentForKnife,
    reviewsForKnife
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
import './MainKnife.scss';

export const MainKnife = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger} title={detailsTitleKnife}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
			<Main 
                images={imagesForKnifeSlider}
            />
            <Marquee cost={costKnife} />
            <Info 
                info={infoKnife}
                nameProd={prodTitleKnife}
            />
			<Details 
                details={detailsForKnife} 
                equipment={equipmentForKnife}
                title={detailsTitleKnife}
            />
            <Order 
                cost={costKnife} 
                size={sizeForKnife}
                nameProduct="Електрична точила"
                orderPrice={450}
            />
            <Delivery nameProduct="Електрична точила"/>
			<Reviews review={reviewsForKnife} title={prodTitleKnife}/>
            <Footer/>
		</div>
	);
};
