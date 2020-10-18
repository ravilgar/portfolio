import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselItem({ src, alt, capture, msg }) {
	return (
		<div>
			<div>
				<img className="d-block w-100" src={src} alt={alt} />
				<Carousel.Caption>
					<h3>{capture}</h3>
					<p>{msg}</p>
				</Carousel.Caption>
			</div>
		</div>
	);
}
