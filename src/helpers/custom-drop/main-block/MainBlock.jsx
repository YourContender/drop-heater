import "./MainBlock.scss";
import { scrollToSection } from "../../scroll/scrollToSection";

export const MainBlock = ({ src, oldPrice, newPrice }) => {
    return (
        <div className="main-wrapper">
            <div className="main-wrapper-photo">
                <img src={src}alt="" />
            </div>
            <div className="main-wrapper-price">
                <div className="main-wrapper-price-block">
                    <div className="main-wrapper-price-block-left">
                        <div className="block-text">
                            Звичайна ціна
                        </div>
                        <div className="block-sum">{oldPrice}</div>
                    </div>
                    <div className="main-wrapper-price-block-right">
                        <div className="block-text">
                            Акційна ціна
                        </div>
                        <div className="block-sum">{newPrice}</div>
                    </div>
                </div>
            </div>
            <div className="main-wrapper-btn">
                <button onClick={() => scrollToSection("order")}>Замовити</button>
            </div>
        </div>
    )
}