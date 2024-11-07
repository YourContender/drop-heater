import React, { useState } from "react";
import { 
    imagesForGlobeSlider, 
    detailsForGlobe, 
    equipmentForGlobe, 
    reviewsForGlobe, 
    prodTitleGlobe, 
    infoProdGlobe, 
    nameProdGlobe,
    sizeForGlobe,
    costGlobe 
} from "../../data";
import { Header } from "../../helpers/constructor/components/header/Header";
import { Main } from "../../helpers/constructor/components/main/Main";
import { Details } from "../../helpers/constructor/components/details/Details";
import { Info } from "../../helpers/constructor/components/info/Info";
import { Order } from "../../helpers/constructor/components/order/Order";
import { Reviews } from "../../helpers/constructor/components/reviews/Reviews";
import { Modal } from "../../helpers/constructor/components/modal/Modal";
import './Mainlamp.scss';

export const MainGlobe = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                nameProd={nameProdGlobe}
            />
			<Main 
                prodTitle={prodTitleGlobe} 
                images={imagesForGlobeSlider}
            />
			<Details 
                details={detailsForGlobe} 
                equipment={equipmentForGlobe}
            />
			<Info 
                info={infoProdGlobe}
            />
			<Order 
                cost={costGlobe} 
                size={sizeForGlobe}
                nameProduct="Глобус світильник"
            />
			<Reviews review={reviewsForGlobe}/>
		</div>
	);
};
