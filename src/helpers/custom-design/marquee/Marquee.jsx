import React from "react";
import "./marquee.scss";

export const Marquee = ({ cost, marquee }) => {
	return (
		<div className="marquee">
			<div className="marquee-inner run">
				<div className="marquee-inner-item">
					ЗНИЖКА 49% ВСТИГНИ КУПИТИ ВСЬОГО ЗА <span>1099</span> ГРН !
				</div>
				<div className="marquee-inner-item">
					ЗНИЖКА 49% ВСТИГНИ КУПИТИ ВСЬОГО ЗА <span>1099</span>  ГРН !
				</div>
			</div>
		</div>
	);
};