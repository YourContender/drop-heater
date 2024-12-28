import React, { useEffect, useState } from "react";
import { Header } from "../../../helpers/constructor/components/header/Header";
import { Main } from "../../../helpers/constructor/components/main/Main";
import { Details } from "../../../helpers/constructor/components/details/Details";
import { Info } from "../../../helpers/constructor/components/info/Info";
import { Reviews } from "../../../helpers/constructor/components/reviews/Reviews";
import { Modal } from "../../../helpers/constructor/components/modal/Modal";
import { Marquee } from "../../../helpers/constructor/components/marquee/Marquee";
import { Delivery } from "../../../helpers/constructor/components/delivery/Delivery";
import { Footer } from "../../../helpers/constructor/components/footer/Footer";
import { Palette } from "../../../helpers/constructor/components/pallete/Palette";
import { OrderProduct } from "../../../helpers/constructor/components/order-product/OrderProduct";
import { 
    cardsProductsMansRobe,
    prodTitleRobeMan,
    costRobeMan,
    infoRobeMan,
    detailsTitleRobeMan,
    detailsForRobeMan,
    equipmentForRobeMan,
    equipmentTitleForRobeMan,
    reviewsForRobeMan,
    sizeForRobeMan,
    colorForRobeMan
} from "../../../robe";

import './Robe.scss';
import SizeTable from "../../../helpers/constructor/components/size-table/SizeTable";

export const RobeMan = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [changeColorMansRobe, setChangeColorMansRobe] = useState("сірий");
    const [selectedColorMansRobe, setSelectedColorMansRobe] = useState(cardsProductsMansRobe[0]);

    useEffect(() => {
        cardsProductsMansRobe.map(item => {
            if (item.color === changeColorMansRobe) {
                return setSelectedColorMansRobe(item);
            } 
        })
    }, [changeColorMansRobe])

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
            />
            <Info 
                info={infoRobeMan}
                nameProd={prodTitleRobeMan}
                details={detailsForRobeMan}
                title="Теплий чоловічий халат"
            />

            <Main 
                images={selectedColorMansRobe.images}
            />
            <Marquee cost={costRobeMan} />

            <Palette 
                changeColor={setChangeColorMansRobe}
                color={changeColorMansRobe}
                listColors={cardsProductsMansRobe}
            />
            <Details 
                equipment={equipmentForRobeMan}
                title={detailsTitleRobeMan}
                other={equipmentTitleForRobeMan}
                size={true}
            />
            <SizeTable/>
            <OrderProduct
                cost={costRobeMan} 
                size={sizeForRobeMan}
                nameProduct="Халат теплий чоловічий"
                orderPrice={1040}
                color={colorForRobeMan}
                defaultSize="L"
                defaultColor="сірий"
            />
            
            
                            {/* <Order 
                                cost={costSuitWoman} 
                                size={sizeForSuitWoman}
                                nameProduct="Костюм флісовий теплий жіночий"
                                orderPrice={1099}
                                color={colorForSuitWoman}
                            /> */}
            <Delivery 
                nameProduct="Теплий чоловічий халат"
            />
            <Reviews 
                review={reviewsForRobeMan} 
                title={prodTitleRobeMan}
            />
            <Footer/>
        </div>
    );
};
