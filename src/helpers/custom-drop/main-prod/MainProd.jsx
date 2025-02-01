import "./MainProd.scss";
import mainPhoto from "../../images/course/1.png";

export const MainProd = () => {
    return (
        <div className="main-wrapper">
            <div className="main-wrapper-photo">
                <img src={mainPhoto}alt="" />
            </div>
            <div className="main-wrapper-price">
                <div className="main-wrapper-price-block">
                    <div className="main-wrapper-price-block-left">
                        <div className="block-text">
                            Звичайна ціна
                        </div>
                        <div className="block-sum">ХХХ</div>
                    </div>
                    <div className="main-wrapper-price-block-right">
                        <div className="block-text">
                            Акційна ціна
                        </div>
                        <div className="block-sum">ХХХ</div>
                    </div>
                </div>
            </div>
            <div className="main-wrapper-btn">
                <button>Замовити</button>
            </div>
        </div>
    )
}