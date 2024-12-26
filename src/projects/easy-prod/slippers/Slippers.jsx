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
    cardsProductsSlippers,
    prodTitleSlippers,
    costSlippers,
    infoSlippers,
    detailsTitleSlippers,
    detailsForSlippers,
    equipmentForSlippers,
    equipmentTitleForSlippers,
    reviewsForSlippers,
    sizeForSlippers,
    colorForSlippers
} from "../../../slippers";

import './Slippers.scss';
import ShoeSizeTable from "../../../helpers/constructor/components/size-table/shoes-size-table/ShoesSizeTable";

export const Slippers = () => {
    const [openBurger, setOpenBurger] = useState(false);
    const [changeColorSlippers, setChangeColorSlippers] = useState("рожевий");
    const [selectedColorSlippers, setSelectedColorSlippers] = useState(cardsProductsSlippers[0]);

    useEffect(() => {
        cardsProductsSlippers.map(item => {
            if (item.color === changeColorSlippers) {
                return setSelectedColorSlippers(item);
            } 
        })
    }, [changeColorSlippers])

    return (
        <div className="container">
            {openBurger ? 
                <Modal 
                    setOpenBurger={setOpenBurger} 
                    title={equipmentTitleForSlippers}
                /> : null
            }
            <Header 
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
            <Info 
                info={infoSlippers}
                nameProd={prodTitleSlippers}
                details={detailsForSlippers}
                title="Теплі плюшеві капці"
            />

            <Main 
                images={selectedColorSlippers.images}
            />
            <Marquee cost={costSlippers} />

            <Palette 
                changeColor={setChangeColorSlippers}
                color={changeColorSlippers}
                listColors={cardsProductsSlippers}
            />
            <Details 
                equipment={equipmentForSlippers}
                title={detailsTitleSlippers}
                other={equipmentTitleForSlippers}
                size={true}
            />
            <ShoeSizeTable/>
            <OrderProduct
                cost={costSlippers} 
                size={sizeForSlippers}
                nameProduct="Халат теплий чоловічий"
                orderPrice={550}
                color={colorForSlippers}
                defaultSize="37"
                defaultColor="рожевий"
            />
            
            
                            {/* <Order 
                                cost={costSuitWoman} 
                                size={sizeForSuitWoman}
                                nameProduct="Костюм флісовий теплий жіночий"
                                orderPrice={1099}
                                color={colorForSuitWoman}
                            /> */}
            <Delivery 
                nameProduct="Теплі плюшеві капці"
            />
            <Reviews 
                review={reviewsForSlippers} 
                title={prodTitleSlippers}
            />
            <Footer/>
        </div>
    );
}
