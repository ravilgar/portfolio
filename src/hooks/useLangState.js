import { useState } from "react";
import { useTranslation } from "react-i18next";

function useLangState(initialVal = "en") {
	const { i18n } = useTranslation();
	// call useState, "reserve piece of state"
	const [state, setState] = useState(initialVal);
	const setLang = (lang) => {
		setState(lang);
		i18n.changeLanguage(lang);
	};
	// return piece of state AND a function to toggle it
	return [state, setLang];
}
export default useLangState;
