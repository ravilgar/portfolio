import React from "react";
import "./Welcome.scss";
import { useTranslation } from "react-i18next";

export default function Welcome() {
	const { t } = useTranslation();
	return (
		<div className="Welcome">
			<h1 className="Welcome-msg">{t("header.welcome_to_my_website")}</h1>
		</div>
	);
}
