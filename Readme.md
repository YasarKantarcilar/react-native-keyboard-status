# React native keyboard status tracker

## INSTALLATION

#### Install the package using npm

```javascript

	npm install react-native-keyboard-status

```

#### or yarn

```javascript

	yarn add react-native-keyboard-status

```

## Hook API

### `useKeyboardStatus()`

The `useKeyboardStatus` hook returns an object with the following property:

- `isVisible: Boolean`

  A boolean value that indicates whether the keyboard is currently open/visible (`true`) or closed/hidden (`false`).

## Usage

Import the `useKeyboardStatus` hook from the package and use it in your React Native components to track the keyboard status.

Here's a simple example demonstrating how to use the `useKeyboardStatus` hook:

```javascript
import React from "react";
import { View, Text } from "react-native";
import useKeyboardStatus from "react-native-keyboard-status";

const MyComponent = () => {
	const { isVisible } = useKeyboardStatus();

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>{isVisible ? "Keyboard is open" : "Keyboard is closed"}</Text>
		</View>
	);
};
export default MyComponent;
```

## License

This project is licensed under the ISC License
