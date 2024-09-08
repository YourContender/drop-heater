import React, { useState } from "react";
import Confetti from "react-confetti";

const OrderPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOrderComplete = () => {
    // Логика завершения заказа
    setShowConfetti(true);

    // Убираем конфетти через 5 секунд
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div>
      <h1>Ваш заказ</h1>
      <button onClick={handleOrderComplete}>Завершить заказ</button>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default OrderPage;
