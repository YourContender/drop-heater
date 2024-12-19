import React, { useEffect, useState } from "react";
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
    tenWoman,
    cardsProductsWomanSuits
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
import { Palette } from "../../helpers/constructor/components/pallete/Palette";

export const SuitWomanMain = () => {
	const [openBurger, setOpenBurger] = useState(false);
    const [changeColorWomanSuit, setChangeColorWomanSuit] = useState("небесний");
    const [selectedColorWomanSuit, setSelectedColorWomanSuit] = useState(cardsProductsWomanSuits[0]);

    useEffect(() => {
        cardsProductsWomanSuits.map(item => {
            if (item.color === changeColorWomanSuit) {
                return setSelectedColorWomanSuit(item);
            } 
        })
    }, [changeColorWomanSuit])

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
            <Info 
                info={infoSuitWoman}
                nameProd={prodTitleSuitWoman}
            />

			<Main 
                images={selectedColorWomanSuit.images}
            />
            <Marquee cost={costSuitWoman} />

            <Palette 
                changeColor={setChangeColorWomanSuit}
                color={changeColorWomanSuit}
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
