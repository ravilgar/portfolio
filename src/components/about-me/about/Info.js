import React from "react";
import { useTranslation } from "react-i18next";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faIdCard,
	faUser,
	faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
	const { t } = useTranslation();
	return (
		<div className="About-info">
			<table className="About-info-table">
				<tbody>
					<tr>
						<th>
							<FontAwesomeIcon icon={faUser} />
						</th>
						<th className="About-info-table-second">
							{t("about_me.ravil_garipov")}
						</th>
					</tr>
					<tr>
						<th>
							<FontAwesomeIcon icon={faIdCard} />
						</th>
						<th className="About-info-table-second">
							{t("about_me.frontend_developer")}
						</th>
					</tr>
					<tr>
						<th>
							<FontAwesomeIcon icon={faMobileAlt} />
						</th>
						<th className="About-info-table-second">{t("about_me.phone")}</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
