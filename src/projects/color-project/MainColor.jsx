import React, { useState } from "react";
import { 
    sizeForColor, 
    prodTitleColor, 
    costColor,  
    infoColor,
    marqueeColor,
    imagesForColorSlider, 
    detailsTitleColor, 
    detailsForColor,
    equipmentForColor,
    equipmentTitleForColor,
    reviewsForColor
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
import './MainColor.scss';

export const MainColor = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger} title={detailsTitleColor}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
			<Main 
                images={imagesForColorSlider}
            />
            <Marquee cost={costColor} marquee={marqueeColor}/>
            <Info 
                info={infoColor}
                nameProd={prodTitleColor}
            />
			<Details 
                details={detailsForColor} 
                equipment={equipmentForColor}
                title={detailsTitleColor}
                other={equipmentTitleForColor}
            />
            <Order 
                cost={costColor} 
                size={sizeForColor}
                nameProduct="Фломастери"
                orderPrice={"в залежності від набору"}
            />
            <Delivery nameProduct="Фломастери"/>
			<Reviews review={reviewsForColor} title={prodTitleColor}/>
            <Footer/>
		</div>
	);
};
