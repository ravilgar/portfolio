import React, { useRef } from "react";
import PrintingBlock from "./typing/PrintingBlock";
import "./Header.scss";
import Welcome from "./welcome/Welcome";
import videoSrc from "./videoHeader.mp4";

export default function Header() {
	const videoRef = useRef();
	const setPlayBack = () => {
		videoRef.current.playbackRate = 1.2;
	};
	return (
		<header className="Header">
			<video
				ref={videoRef}
				autoPlay
				muted
				loop
				className="Header-video"
				onCanPlay={() => setPlayBack()}
			>
				<source src={videoSrc} type="video/mp4" />
			</video>
			<div className="Header-welcome">
				<Welcome />
			</div>
			<div className="Header-typing">
				<PrintingBlock />
			</div>
		</header>
	);
}
