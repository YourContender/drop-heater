import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Details } from "./components/details/Details"
import { Order } from "./components/order/Order"
import { Reviews } from "./components/reviews/Reviews";
import { Modal } from "./components/modal/Modal";
import { Info } from "./components/info/Info";
import "./MainLamp.scss";

export const MainLamp = () => {
	const [openBurger, setOpenBurger] = useState(false);

	return (
		<div className="container">
			{openBurger ? <Modal setOpenBurger={setOpenBurger}/> : null}
			<Header openBurger={openBurger} setOpenBurger={setOpenBurger}/>
			<Main/>
			<Details />
			<Info/>
			<Order/>
			<Reviews/>
		</div>
	);
};
