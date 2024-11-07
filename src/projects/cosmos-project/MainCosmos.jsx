import React, { useState } from "react";
import { 
    imagesForSliderCosmos, 
    detailsForCosmos, 
    equipmentForCosmos, 
    reviewsForCosmos, 
    prodTitleCosmos, 
    infoProdCosmos, 
    nameProdCosmos,
    sizeForCosmos,
    costCosmos 
} from "../../data";
import { Header } from "../../helpers/constructor/components/header/Header";
import { Main } from "../../helpers/constructor/components/main/Main";
import { Details } from "../../helpers/constructor/components/details/Details";
import { Info } from "../../helpers/constructor/components/info/Info";
import { Order } from "../../helpers/constructor/components/order/Order";
import { Reviews } from "../../helpers/constructor/components/reviews/Reviews";
import { Modal } from "../../helpers/constructor/components/modal/Modal";
import './Mainlamp.scss';

export const MainCosmos = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger}/> : null}
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                nameProd={nameProdCosmos}
            />
			<Main 
                prodTitle={prodTitleCosmos} 
                images={imagesForSliderCosmos}
            />
			<Details 
                details={detailsForCosmos} 
                equipment={equipmentForCosmos}
            />
			<Info 
                info={infoProdCosmos}
            />
			<Order 
                cost={costCosmos} 
                size={sizeForCosmos}
                nameProduct="космонавт"
            />
			<Reviews review={reviewsForCosmos}/>
		</div>
	);
};
