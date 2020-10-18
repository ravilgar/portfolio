import React from "react";
import { useTranslation } from "react-i18next";

import "./Copyright.scss";

export default function AboutMe() {
	const { t } = useTranslation();
	// найти текущий год
	const d = new Date();
	const currentYear = d.getFullYear();
	return (
		<p className="Copyright">
			&#169; {currentYear === 2020 ? `${currentYear} ` : `2020 - ${currentYear} `}
			{t("footer.all_rights_reserved")}
		</p>
	);
}
