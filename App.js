import React, { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading';
import { Navigator } from './navigation/Navigator.js';
import { Provider } from 'react-redux';
import { init } from './db/index.js';
import { store } from './store/index.js';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		Inter: require('./fonts/Inter.ttf'),
	});
	useEffect(() => {
		init();
	}, []);

	if (!loaded) return <AppLoading />;

	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}
