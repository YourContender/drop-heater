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
    cardsProductsAsian,
    prodTitleAsian,
    costAsian,
    infoAsian,
    detailsTitleAsian,
    detailsForAsian,
    equipmentForAsian,
    equipmentTitleForAsian,
    reviewsForAsian,
    sizeForAsian,
    colorForAsian
} from "../../../tmp/asian";

import './Asian.scss';
import SizeTable from "../../../helpers/constructor/components/size-table/SizeTable";

export const Asian = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [changeColorAsian, setChangeColorAsian] = useState("чорний");
    const [selectedColorAsian, setSelectedColorAsian] = useState(cardsProductsAsian[0]);

    useEffect(() => {
        cardsProductsAsian.map(item => {
            if (item.color === changeColorAsian) {
                return setSelectedColorAsian(item);
            } 
        })
    }, [changeColorAsian])

    return (
        <div className="container">
            {openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={equipmentTitleForAsian}
                /> : null
            }
            <Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
            <Info 
                info={infoAsian}
                nameProd={prodTitleAsian}
                details={detailsForAsian}
                title="Спокусливе боді з відкритим доступом та спідничка"
            />

            <Main 
                images={selectedColorAsian.images}
            />
            <Marquee cost={costAsian} />
{/* 
            <Palette 
                changeColor={setChangeColorAsian}
                color={changeColorAsian}
                listColors={cardsProductsAsian}
            /> */}
            <Details 
                equipment={equipmentForAsian}
                title={detailsTitleAsian}
                other={equipmentTitleForAsian}
                size={true}
            />
            <SizeTable/>
            <OrderProduct
                cost={costAsian} 
                size={sizeForAsian}
                nameProduct="Спокусливе боді з відкритим доступом та спідничка"
                orderPrice={780}
                color={colorForAsian}
                defaultSize="S"
                defaultColor="чорний"
                article={cardsProductsAsian[0].article}
            />
            <Delivery 
                nameProduct="Спокусливе боді з відкритим доступом та спідничка"
            />
            <Reviews 
                review={reviewsForAsian} 
                title={prodTitleAsian}
            />
            <Footer/>
        </div>
    );
};
