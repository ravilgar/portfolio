import React from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";

export default function About() {
	const { t } = useTranslation();
	return (
		<div>
			<h2 className="About-header">{t("about_me.why_frontend")}</h2>
			<p className="About-p">{t("about_me.i_develop_websites")}</p>
		</div>
	);
}
