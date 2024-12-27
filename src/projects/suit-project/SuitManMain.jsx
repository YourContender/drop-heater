import React, { useState } from "react";
import { 
    imagesForRobeManSlider,
    prodTitleRobeMan,
    costRobeMan,
    infoRobeMan,
    detailsTitleRobeMan,
    detailsForRobeMan,
    equipmentForRobeMan,
    equipmentTitleForRobeMan,
    reviewsForRobeMan,
    sizeForRobeMan,
    colorForRobeMan,
    ten
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

export const SuitManMain = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={equipmentTitleForRobeMan}
                /> : null
            }
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                // nameProd={nameProdRubber}
            />
            <Info 
                info={infoRobeMan}
                nameProd={prodTitleRobeMan}
                details={detailsForRobeMan} 
            />
			<Main 
                images={imagesForRobeManSlider}
            />
            <Marquee cost={costRobeMan} />
			<Details 
                equipment={equipmentForRobeMan}
                title={detailsTitleRobeMan}
                other={equipmentTitleForRobeMan}
                size={true}
                ten={ten}
            />
            <Order 
                cost={costRobeMan} 
                size={sizeForRobeMan}
                nameProduct="Костюм флісовий теплий чоловічий"
                orderPrice={1099}
                color={colorForRobeMan}
            />
            <Delivery 
                nameProduct="Костюм флісовий теплий чоловічий"
            />
			<Reviews 
                review={reviewsForRobeMan} 
                title={prodTitleRobeMan}
            />
            <Footer/>
		</div>
	);
};
