import React, { useRef, useState } from "react";
import Header from "./components/header/Header";
import AboutMe from "./components/about-me/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Container from "react-bootstrap/Container";
import "./App.scss";

function App() {
	// Переменные для spyscroll
	const refHome = useRef(null);
	const refAbout = useRef(null);
	const refNav = useRef(null);
	const [place, setPlace] = useState("home");

	// Cоздадим spyscroll
	window.onscroll = function () {
		const scrollPosition = document.documentElement.scrollTop;

		const home = refHome.current.clientHeight;
		const about = refAbout.current.clientHeight;
		// Зададим оффсет
		const offset = refNav.current.clientHeight;
		const position = scrollPosition + offset;

		if (position < home) {
			setPlace("home");
		} else if (position < home + about) {
			setPlace("about");
		} else {
			setPlace("portfolio");
		}
	};

	// Спиннер при загрузке
	const [loading, setLoading] = useState(false);
	// setTimeout(() => setLoading(true), 2000);
	setTimeout(() => setLoading(true), 0);

	return (
		<div>
			{!loading ? (
				<div className="App-onload">
					<div className="App-spinner"></div>
				</div>
			) : (
				<div className="App">
					<div id="home" ref={refHome}>
						<Header />
					</div>
					<Container>
						<div id="about-me" ref={refAbout}>
							<AboutMe />
						</div>
						<div id="projects">
							<Portfolio />
						</div>
					</Container>
					<Footer />
					<div className="App-navbar" ref={refNav}>
						<Navbar place={place} />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
