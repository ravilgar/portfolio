import React from "react";
import { useTranslation } from "react-i18next";
import img from "./img1.jpg";
import "./Card.scss";

export default function Card() {
	const { t } = useTranslation();
	return (
		<div className="Card">
			<div className="w3-card-4 w3-light-grey ">
				<img src={img} alt="Равиль Гарипов" style={{ width: "100%" }} />
				<div className="w3-container w3-center">
					<p>
						{t("about_me.here_i_am")}
						<span role="img" aria-label="подмигивание">
							😉
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
