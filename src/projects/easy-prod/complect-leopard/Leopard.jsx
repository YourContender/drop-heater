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
    cardsProductsLeopard,
    prodTitleLeopard,
    costLeopard,
    infoLeopard,
    detailsTitleLeopard,
    detailsForLeopard,
    equipmentForLeopard,
    equipmentTitleForLeopard,
    reviewsForLeopard,
    sizeForLeopard,
    colorForLeopard,
    sizeTenForLeopard
} from "../../../tmp/leopard";

import './Leopard.scss';
import SizeTable from "../../../helpers/constructor/components/size-table/SizeTable";

export const Leopard = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [changeColorLeopard, setChangeColorLeopard] = useState("чорний");
    const [selectedColorLeopard, setSelectedColorLeopard] = useState(cardsProductsLeopard[0]);

    useEffect(() => {
        cardsProductsLeopard.map(item => {
            if (item.color === changeColorLeopard) {
                return setSelectedColorLeopard(item);
            } 
        })
    }, [changeColorLeopard])

    return (
        <div className="container">
            {openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={equipmentTitleForLeopard}
                /> : null
            }
            <Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
            <Info 
                info={infoLeopard}
                nameProd={prodTitleLeopard}
                details={detailsForLeopard}
                title="Розкішний комплект з леопардовим принтом"
            />

            <Main 
                images={selectedColorLeopard.images}
            />
            <Marquee cost={costLeopard} />
{/* 
            <Palette 
                changeColor={setChangeColorAsian}
                color={changeColorAsian}
                listColors={cardsProductsAsian}
            /> */}
            <Details 
                equipment={equipmentForLeopard}
                title={detailsTitleLeopard}
                other={equipmentTitleForLeopard}
                size={true}
            />
            <SizeTable sizes={sizeTenForLeopard}/>
            <OrderProduct
                cost={costLeopard} 
                size={sizeForLeopard}
                nameProduct="Розкішний комплект з леопардовим принтом"
                orderPrice={880}
                color={colorForLeopard}
                defaultSize="S"
                defaultColor="чорний"
                article={cardsProductsLeopard[0].article}
            />
            <Delivery 
                nameProduct="Розкішний комплект з леопардовим принтом"
            />
            <Reviews 
                review={reviewsForLeopard} 
                title={prodTitleLeopard}
            />
            <Footer/>
        </div>
    );
};
