import React from "react";
import "./marquee.scss";

export const Marquee = ({ cost, marquee }) => {
	return (
		<div className="marquee">
			<div className="marquee-inner run">
				<div className="marquee-inner-item">
					{marquee ? marquee : "ЗНИЖКА !!! ВСТИГНИ ПРИДБАТИ ВСЬОГО ЗА "}<span>{cost.new}</span> ГРН !!!
				</div>
				<div className="marquee-inner-item">
					{marquee ? marquee : "ЗНИЖКА !!! ВСТИГНИ ПРИДБАТИ ВСЬОГО ЗА "}<span>{cost.new}</span> ГРН !!!
				</div>
			</div>
		</div>
	);
};