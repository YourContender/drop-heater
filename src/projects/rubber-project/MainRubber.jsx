import React, { useState } from "react";
import { 
    imagesForRubberSlider, 
    detailsForRubber, 
    equipmentForRubber,  
    reviewsForRubber,
    prodTitleRubber, 
    infoRubber, 
    detailsTitleRubber,
    sizeForRubber,
    equipmentTitleForRubber,
    costRubber 
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
import './MainRubber.scss';

export const MainRubber = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={detailsTitleRubber}
                /> : null
            }
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                // nameProd={nameProdRubber}
            />
			<Main 
                images={imagesForRubberSlider}
            />
            <Marquee cost={costRubber} />
            <Info 
                info={infoRubber}
                nameProd={prodTitleRubber}
            />
			<Details 
                details={detailsForRubber} 
                equipment={equipmentForRubber}
                title={detailsTitleRubber}
                other={equipmentTitleForRubber}
            />
            <Order 
                cost={costRubber} 
                size={sizeForRubber}
                nameProduct="Гумка для фітнесу Fit Simplify GO DO 5 шт"
                orderPrice={350}
            />
            <Delivery 
                nameProduct="Гумка для фітнесу Fit Simplify GO DO 5 шт"
            />
			<Reviews 
                review={reviewsForRubber} 
                title={prodTitleRubber}
            />
            <Footer/>
		</div>
	);
};
