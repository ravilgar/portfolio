import React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Portfolio.scss";
import Jumbotron from "./jumbotron/Jumbotron";

export default function AboutMe() {
	const { t } = useTranslation();

	return (
		<div className="AboutMe Portfolio">
			<Container>
				<Row className="AboutMe-row">
					<Col md={12}>
						<h1 className="AboutMe-header">{t("portfolio.work_experience")}</h1>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="AboutMe-row">
						<p>{t("portfolio.i_work")}</p>
					</Col>
				</Row>
				<Jumbotron
					title={t("portfolio.projects.title")}
					description={t("portfolio.projects.description")}
					src={t("portfolio.projects.src")}
					key={t("portfolio.projects.id")}
					buttonName={t("portfolio.view_code")}
				/>
			</Container>
		</div>
	);
}
