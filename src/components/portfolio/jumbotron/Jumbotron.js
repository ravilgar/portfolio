import React from "react";
import "./Jumbotron.scss";

export default function ControlledCarousel({
	title,
	description,
	src,
	buttonName,
}) {
	return (
		<div className="Jumbotron">
			<h2>{title}</h2>
			<p>{description}</p>
			<p>
				<a href={src} target="_blank" rel="noopener noreferrer">
					{buttonName}{" "}
				</a>
			</p>
		</div>
	);
}
