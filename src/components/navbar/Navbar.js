import React, { useRef } from "react";
import useLangState from "../../hooks/useLangState";
import { useTranslation } from "react-i18next";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faHome, faTrophy } from "@fortawesome/free-solid-svg-icons";

function MyNavbar({ place }) {
	// Локализация
	const [, setLang] = useLangState();
	const { t, i18n } = useTranslation();

	// Закрыть navbar
	// кнопка, раскрывающая меню
	const refToggle = useRef(null);

	const collapseNav = () => {
		//Проверить открыто ли меню
		if (refToggle.current.className === "navbar-toggler") {
			// Если открыто, закрыть
			refToggle.current.click();
		}
	};
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#home">ravilgar</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" ref={refToggle} />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							href="#home"
							className={place === "home" ? "App-Link-active" : "App-Link"}
						>
							<span className={place === "home" ? "Icon-moving" : ""}>
								<FontAwesomeIcon icon={faHome} />
							</span>
							&nbsp;
							{t("navbar.home")}
						</Nav.Link>
						<Nav.Link
							href="#about-me"
							className={place === "about" ? "App-Link-active" : "App-Link"}
						>
							<span className={place === "about" ? "Icon-moving" : ""}>
								<FontAwesomeIcon icon={faIdCard} />
							</span>
							&nbsp;
							{t("navbar.about_me")}
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={place === "portfolio" ? "App-Link-active" : "App-Link"}
						>
							<span className={place === "portfolio" ? "Icon-moving" : ""}>
								<FontAwesomeIcon icon={faTrophy} />
							</span>
							&nbsp;
							{t("navbar.portfolio")}
						</Nav.Link>
					</Nav>
					<Nav>
						<Dropdown.Divider />
						<Form inline>
							<Form.Group>
								<Form.Control
									as="select"
									onChange={(e) => {
										setLang(e.target.value);
										collapseNav();
									}}
									value={i18n.language}
								>
									<option
										value="en"
										disabled={i18n.language === "en" ? true : false}
									>
										En
									</option>
									<option
										value="ru"
										disabled={i18n.language === "ru" ? true : false}
									>
										Ru
									</option>
								</Form.Control>
							</Form.Group>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
