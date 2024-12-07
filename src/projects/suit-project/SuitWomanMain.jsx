import React, { useState } from "react";
import { 
    imagesForSuitWomanSlider,
    prodTitleSuitWoman,
    costSuitWoman,
    infoSuitWoman,
    detailsTitleSuitWoman,
    detailsForSuitWoman,
    equipmentForSuitWoman,
    equipmentTitleForSuitWoman,
    reviewsForSuitWoman,
    sizeForSuitWoman,
    colorForSuitWoman,
    tenWoman
} from "../../clothes";
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
import './SuitManMain.scss';

export const SuitWomanMain = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={equipmentTitleForSuitWoman}
                /> : null
            }
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                // nameProd={nameProdRubber}
            />
			<Main 
                images={imagesForSuitWomanSlider}
            />
            <Marquee cost={costSuitWoman} />
            <Info 
                info={infoSuitWoman}
                nameProd={prodTitleSuitWoman}
            />
			<Details 
                details={detailsForSuitWoman} 
                equipment={equipmentForSuitWoman}
                title={detailsTitleSuitWoman}
                other={equipmentTitleForSuitWoman}
                size={true}
                ten={tenWoman}
            />
            <Order 
                cost={costSuitWoman} 
                size={sizeForSuitWoman}
                nameProduct="Костюм флісовий теплий жіночий"
                orderPrice={1099}
                color={colorForSuitWoman}
            />
            <Delivery 
                nameProduct="Костюм флісовий теплий жіночий"
            />
			<Reviews 
                review={reviewsForSuitWoman} 
                title={prodTitleSuitWoman}
            />
            <Footer/>
		</div>
	);
};
