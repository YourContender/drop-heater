import React from "react";
import { Main } from "./components/main/Main";
import { Descr } from "./components/descr/Descr";
import OrderPage from "./components/OrderPage";
import { Details } from "./components/details/Details";
import { Order } from "./components/order/Order";
import { Info } from "./components/info/Info";

export const App = () => {
	return (
		<div>
			<Main />
			<Descr/>
			{/* <OrderPage/> */}
			<Details/>
			<Order/>
			{/*<Info/>*/}
		</div>
	);
};
