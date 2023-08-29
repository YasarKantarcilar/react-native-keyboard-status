import { Keyboard, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

//CREATED FOR TRACK THE KEYBOARD STATUS
const useKeyboardStatus = () => {
	const [isVisible, setisVisible] = useState(false);
	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
			setisVisible(true); // or some other action
		});
		const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
			setisVisible(false); // or some other action
		});
		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);
	return { isVisible };
};

export default useKeyboardStatus;
