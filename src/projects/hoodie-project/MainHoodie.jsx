import React, { useState } from "react";
import { 
    imagesForHoodieSlider, 
    detailsForHoodie, 
    equipmentForHoodie,  
    reviewsForHoodie,
    detailsTitleHoodie,
    prodTitleHoodie, 
    infoHoodie, 
    equipmentTitleForHoodie,
    costHoodie 
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
import './MainHoodie.scss';

export const MainHoodie = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={detailsTitleHoodie}
                /> : null
            }
			<Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
                nameProd={prodTitleHoodie}
            />
			<Main 
                images={imagesForHoodieSlider}
            />
            <Marquee cost={costHoodie} />
            <Info 
                info={infoHoodie}
                nameProd={prodTitleHoodie}
            />
			<Details 
                details={detailsForHoodie} 
                equipment={equipmentForHoodie}
                title={detailsTitleHoodie}
                other={equipmentTitleForHoodie}
            />
            <Order 
                cost={costHoodie} 
                nameProduct="Толстовка плед з капюшоном"
                orderPrice={499}
            />
            <Delivery 
                nameProduct="Толстовка плед з капюшоном"
            />
			<Reviews 
                review={reviewsForHoodie} 
                title={prodTitleHoodie}
            />
            <Footer/>
		</div>
	);
};
