import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Copyright from "./copyright/Copyright";
import "./Footer.scss";

export default function AboutMe() {
	const { t } = useTranslation();

	const [hoverMail, setHoverMail] = useState(false);

	return (
		<div className="Footer">
			<Container>
				<Row className="Footer-contactMe">
					<p>{t("footer.have_a_project")}</p>
					<p>{t("footer.contact_me")} </p>
				</Row>
				<Row className="Footer-contactMe">
					<p className="Footer-contactMe-Mail">
						<a
							href="mailto:rg-frontend@mail.ru?Subject=From%20Portfolio%20Site"
							target="_top"
							onMouseOver={() => {
								setHoverMail(true);
							}}
							onMouseOut={() => {
								setHoverMail(false);
							}}
						>
							{hoverMail ? (
								<i className="material-icons mail">drafts</i>
							) : (
								<i className="material-icons mail">mail</i>
							)}
						</a>
					</p>
				</Row>

				<Row className="Footer-copyright">
					<Copyright />
				</Row>
			</Container>
		</div>
	);
}
