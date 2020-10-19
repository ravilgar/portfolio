import React, { useState } from "react";
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
	// const refCollapse = useRef(null);
	// refCollapse.classList.remove("show");
	// const [collapsed, setCollapsed] = useState("navbar-toggler");
	// const collapse = () => {
	// 	setCollapsed("navbar-toggler collapsed");
	// };
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => {
		setIsNavCollapsed(!isNavCollapsed);
		console.log(isNavCollapsed);
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="#home">ravilgar</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					aria-expanded={!isNavCollapsed ? true : false}
				/>
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
										handleNavCollapse();
									}}
									value={i18n.language}
								>
									<option value="en">En</option>
									<option value="ru">Ru</option>
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
