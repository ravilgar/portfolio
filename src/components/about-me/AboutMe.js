import React from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutMe.scss";
import Card from "./card/Card";
import About from "./about/About";
import Info from "./about/Info";

export default function AboutMe() {
	const { t } = useTranslation();

	return (
		<div className="AboutMe">
			<Container>
				<Row className="AboutMe-row">
					<Col md={12}>
						<h1 className="AboutMe-header">{t("about_me.about_me")}</h1>
					</Col>
				</Row>
				<Row>
					<Col md={4} className="AboutMe-row">
						<Card />
					</Col>
					<Col md={8} className="AboutMe-row">
						<Info />
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<About />
					</Col>
				</Row>
			</Container>
		</div>
	);
}
