import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typing from "./Typing";
import "./PrintingBlock.scss";

export default function PrintingBlock() {
	const [isTyping, setIsTyping] = useState(true);

	// Локализация
	const { t } = useTranslation();

	const setCursor = () => {
		setIsTyping(false);
	};
	return (
		<div className="PrintingBlock">
			<Typing
				msg={t("header.typing.name")}
				delay={1000}
				setCursor={setCursor}
				isTyping={isTyping}
			/>
			<Typing
				msg={t("header.typing.frontend_developer")}
				delay={9000}
				setCursor={setCursor}
				isTyping={!isTyping}
			/>
		</div>
	);
}
