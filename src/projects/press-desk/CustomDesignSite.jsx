import React, { useState } from 'react'
import { HeaderBlock } from '../../helpers/custom-drop/header-block/HeaderBlock';
import "./CustomDesignSite.scss";
import { MainBlock } from '../../helpers/custom-drop/main-block/MainBlock';
import TimerBlock from '../../helpers/custom-drop/timer-block/TimerBlock';
import { DetailsBlock } from '../../helpers/custom-drop/details-block/DetailsBlock';
import { QuestionBlock } from '../../helpers/custom-drop/question-block/QuestionBlock';
import { OrderProd } from '../../helpers/custom-drop/order-prod/OrderProd';
import { DescrBlock } from '../../helpers/custom-drop/descr-block/DescrBlock';
import { DeliveryBlock } from '../../helpers/custom-drop/delivery-block/DeliveryBlock';
import { FooterBlock } from '../../helpers/custom-drop/footer-block/FooterBlock';
import { pageConfig, thanksPage } from '../../pageConfig';
import { ThanksPage } from '../../helpers/custom-drop/thanks-page/ThanksPage';

export const CustomDesignSite = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalTel, setModalTel] = useState("");
    const [modalName, setModalName] = useState("");
    
    return (
        <div className="custom-container">
            {
                pageConfig.content.map((obj, index) => {
                    switch (obj.type) {
                        case "basicHeaderBlock":
                            return <HeaderBlock {...obj} key={index}/>
                        case "promoBlock" : 
                            return <MainBlock {...obj} key={index}/> ;
                        case "timerBlock" :
                            return <TimerBlock {...obj} key={index}/>;
                        case "descriptionBlock" :
                            return <DescrBlock {...obj} key={index}/>;
                        case "detailsBlock" :
                            return <DetailsBlock {...obj} key={index}/>;
                        case "questionBlock" :
                            return <QuestionBlock {...obj} key={index}/>;
                        case "orderBlock" :
                            return <OrderProd 
                                {...obj} 
                                key={index} 
                                setModalOpen={setModalOpen}
                                setModalTel={setModalTel}
                                setModalName={setModalName}
                                />;
                        default: 
                            return null;
                    }
                })
            }
            <ThanksPage 
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                modalTel={modalTel}
                modalName={modalName}
                setModalTel={setModalTel}
                setModalName={setModalName}
                thanksPage={thanksPage}
            />
            <DeliveryBlock/>
            <FooterBlock/>
        </div>
    )
}
