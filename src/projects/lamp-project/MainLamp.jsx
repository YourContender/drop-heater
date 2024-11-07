import React, { useState } from "react";
import { 
    imagesForLampSlider, 
    detailsForLamp, 
    equipmentForLamp, 
    reviewsForLamp, 
    prodTitle, 
    infoProd, 
    sizeForLamp,
    nameProd,
    cost 
} from "../../data";
import { Header } from "../../helpers/constructor/components/header/Header";
import { Main } from "../../helpers/constructor/components/main/Main";
import { Details } from "../../helpers/constructor/components/details/Details";
import { Info } from "../../helpers/constructor/components/info/Info";
import { Order } from "../../helpers/constructor/components/order/Order";
import { Reviews } from "../../helpers/constructor/components/reviews/Reviews";
import { Modal } from "../../helpers/constructor/components/modal/Modal";
import './Mainlamp.scss';

export const MainLamp = () => {
	const [openBurger, setOpenBurger] = useState(false);

    const [classNameForSize, setClassNameForSize] = useState(0);
    const [oldPrice, setOldPrice] = useState(0);
    const [newPrice, setNewPrice] = useState(0);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                nameProd={nameProd}
            />
			<Main 
                prodTitle={prodTitle} 
                images={imagesForLampSlider}
            />
			<Details 
                details={detailsForLamp} 
                equipment={equipmentForLamp}
            />
			<Info 
                info={infoProd}
            />
			<Order 
                cost={cost} 
                size={sizeForLamp}
                nameProduct="Акумуляторна лампа"
            />
			<Reviews review={reviewsForLamp}/>
		</div>
	);
};
