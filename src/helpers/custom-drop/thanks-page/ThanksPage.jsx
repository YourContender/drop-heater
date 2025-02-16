import "./ThanksPage.scss";

export const ThanksPage = ({ isOpen, onClose, modalTel, modalName}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{modalName} Дякуємо за замовлення !</h2>
                <p>Оператор зв`яжеться з Вами найближчим часом за номером {modalTel}.</p>
                <span>Якщо Ви допустили помилку, поверніться на сторінку замовлення та відправте форму повторно.</span>
                <button className="close-button" onClick={onClose}>ПОВЕРНУТИСЯ</button>
            </div>
        </div>
    )
}