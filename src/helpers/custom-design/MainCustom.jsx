import React, { useState } from 'react';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Sale } from './sale/Sale';
import { Main } from './main/Main';
import { Cards } from './cards/Cards';
import "./MainCustom.scss";
import { CustomModal } from './custom-modal/CustomModal';
import { Details } from '../constructor/components/details/Details';
import { Modal } from "../../helpers/constructor/components/modal/Modal.jsx";
import {
    detailsTitleSuitWoman,
    detailsForSuitWoman,
    equipmentForSuitWoman,
    equipmentTitleForSuitWoman,
    reviewsForSuitWoman,
    tenWoman
} from "../../clothes.js"
import { Delivery } from '../constructor/components/delivery/Delivery.jsx';
import { Reviews } from '../constructor/components/reviews/Reviews.jsx';

export const MainCustom = () => {
    const [openOrderModal, setOpenOrderModal] = useState(false);
    const [orderProd, setOrderProd] = useState([]);
    const [openBurger, setOpenBurger] = useState(false);

    return (
        <div className="container">
            {openBurger ? <Modal setOpenBurger={setOpenBurger} title={equipmentTitleForSuitWoman}/> : null}
            <Header
                openBurger={openBurger} 
                setOpenBurger={setOpenBurger}
            />
            <Main/>
            <Details
                details={detailsForSuitWoman}
                equipment={equipmentForSuitWoman}
                title={detailsTitleSuitWoman}
                other={equipmentTitleForSuitWoman}
                size={true}
                ten={tenWoman}
            />

            {openOrderModal ? <CustomModal 
                setOpenOrderModal={setOpenOrderModal}
                orderProd={orderProd}
            /> : null}
            <Sale/>
            <Cards 
                setOpenOrderModal={setOpenOrderModal} 
                openOrderModal={openOrderModal}
                setOrderProd={setOrderProd}
            />
            <Delivery/>
            <Reviews 
                review={reviewsForSuitWoman}
                title="Жіночий теплий плюшевий костюм преміум якості"
            />
            <Footer/>
        </div>
    )
}
