import React from "react";
import "./Marquee.scss";

const Marquee = ({ cost }) => {
	return (
		<div className="marquee">
			<div className="marquee-inner run">
				<div className="marquee-inner-item">
					ЗНИЖКА !!! ВСТИГНИ ПРИДБАТИ ВСЬОГО ЗА <span>{cost.new}</span> ГРН !!!
				</div>
				<div className="marquee-inner-item">
                    ЗНИЖКА !!! ВСТИГНИ ПРИДБАТИ ВСЬОГО ЗА <span>{cost.new}</span> ГРН !!!
				</div>
			</div>
		</div>
	);
};

export default Marquee;