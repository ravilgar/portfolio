import React, { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "./Typing.scss";

export default function Typing({ msg, delay, isTyping, setCursor }) {
	const [message, setMessage] = useState("");
	// переменная для рекурсии
	// let i = 0;

	// Логика печатания здесь.
	const type = () => {
		// РЕШЕНИЕ 1
		// Рекурсия - решение работает, но мне не нравится
		// if (i < msg.length) {
		// 	const newMsg = msg.slice(0, i + 1);
		// 	setMessage(newMsg);
		// 	i++;
		// 	setTimeout(type, Math.floor(Math.random() * 150) + 200);
		// 	i === msg.length && setTimeout(setCursor, 2000);
		// }

		// РЕШЕНИЕ 2
		// Пользуемся авинхронной красотой js
		// Для каждой буквы вычисляем и записываем время появления
		let _delay = delay;

		// вычисляем время в которое будет напечатано каждое слово
		for (let index = 0; index < msg.length; index++) {
			// Имитирует разную скорость печатания
			const randomTime = Math.floor(Math.random() * 350) + 150;
			_delay = _delay + randomTime;
			// последняя буква
			const end = index + 1;

			setTimeout(() => {
				setMessage(msg.slice(0, end));
				// Когда слово напечатано, то курсор убираем с некоторой задержкой
				msg === msg.slice(0, end) && setTimeout(() => setCursor(), 1800);
			}, _delay);
		}
	};

	// https://stackoverflow.com/questions/53179075/with-useeffect-how-can-i-skip-applying-an-effect-upon-the-initial-render
	// Initializing didMount as false
	const [didMount, setDidMount] = useState(0);

	useEffect(() => {
		setDidMount(() => {
			return didMount + 1;
		});
		if (didMount === 1) {
			for (let i = 0; i < 10000; i++) {
				window.clearInterval(i);
			}
		}
		if (didMount >= 1) {
			setCursor();
			setMessage(msg);
		}
	}, [msg]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<h3
			className={`PrintingBlock-msg Typing ${
				isTyping ? "Typing-msg-typing" : "Typing-msg-typed"
			}`}
		>
			<VisibilitySensor
				onChange={() => {
					setTimeout(type, delay);
				}}
			/>
			{isTyping && (
				<span className="Typing-msg-typed" style={{ marginRight: "15px" }}>
					{">"}
				</span>
			)}
			{message} {isTyping && <div className="Typing-cursor"></div>}
		</h3>
	);
}
