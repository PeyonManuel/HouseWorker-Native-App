import React, { useEffect } from 'react';

import AppLoading from 'expo-app-loading';
import { LoginNavigator } from './navigation/LoginNavigator.js';
import { LoginScreen } from './components/LoginScreen.js';
import { Navigator } from './navigation/Navigator.js';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		Inter: require('./fonts/Inter.ttf'),
	});

	if (!loaded) return <AppLoading />;

	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}
