import React from 'react';
import { Window, TitleBar, Text } from 'react-desktop/windows';

import './main.css';

export default function App(props) {
	const color = '#cc7f29';
	const theme = 'light';
	return (
		<Window
			color={color}
			theme={theme}
			chrome
			padding="12px"
			style={{margin:'0px'}}
		>
			<TitleBar title="My Windows Application" controls />
			<Text color={theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
		</Window>
	);
}