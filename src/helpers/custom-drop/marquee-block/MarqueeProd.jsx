import React from "react";
import "./marqueeProd.scss";

export const MarqueeProd = ({text}) => {
	return (
		<div className="marquee">
			<div className="marquee-inner run">
				<div className="marquee-inner-item">
					{text}
				</div>
				<div className="marquee-inner-item">
					{text}
				</div>
			</div>
		</div>
	);
};