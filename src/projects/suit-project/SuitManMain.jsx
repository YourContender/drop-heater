import React, { useState } from "react";
import { 
    imagesForSuitManSlider,
    prodTitleSuitMan,
    costSuitMan,
    infoSuitMan,
    detailsTitleSuitMan,
    detailsForSuitMan,
    equipmentForSuitMan,
    equipmentTitleForSuitMan,
    reviewsForSuitMan,
    sizeForSuitMan,
    colorForSuitMan,
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
                    title={equipmentTitleForSuitMan}
                /> : null
            }
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                // nameProd={nameProdRubber}
            />
			<Main 
                images={imagesForSuitManSlider}
            />
            <Marquee cost={costSuitMan} />
            <Info 
                info={infoSuitMan}
                nameProd={prodTitleSuitMan}
            />
			<Details 
                details={detailsForSuitMan} 
                equipment={equipmentForSuitMan}
                title={detailsTitleSuitMan}
                other={equipmentTitleForSuitMan}
                size={true}
                ten={ten}
            />
            <Order 
                cost={costSuitMan} 
                size={sizeForSuitMan}
                nameProduct="Костюм флісовий теплий чоловічий"
                orderPrice={1199}
                color={colorForSuitMan}
            />
            <Delivery 
                nameProduct="Костюм флісовий теплий чоловічий"
            />
			<Reviews 
                review={reviewsForSuitMan} 
                title={prodTitleSuitMan}
            />
            <Footer/>
		</div>
	);
};
