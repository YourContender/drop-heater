import React from 'react'
import { HeaderProd } from '../../../helpers/custom-drop/header-prod/HeaderProd';
import "./CustomDesignSite.scss";
import { MainProd } from '../../../helpers/custom-drop/main-prod/MainProd';
import TimerProd from '../../../helpers/custom-drop/timer-prod/TimerProd';
import { DetailsProd } from '../../../helpers/custom-drop/details-prod/DetailsProd';
import { QuestionProd } from '../../../helpers/custom-drop/question-prod/QuestionProd';

export const CustomDesignSite = () => {
    return (
        <div className="custom-container">
            <HeaderProd/>
            <MainProd/>
            <TimerProd/>
            <DetailsProd/>
            <QuestionProd/>
        </div>
    )
}
