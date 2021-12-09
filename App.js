import { BackHandler, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading';
import { MainScreen } from './components/MainScreen.js';
import { SearchScreen } from './components/SearchScreen.js';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/styles';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		Inter: require('./fonts/Inter.ttf'),
	});
	const [currentScreen, setCurrentScreen] = useState(0);
	const [lastScreen, setLastScreen] = useState(0);
	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => {
				setCurrentScreen(lastScreen);
				return true;
			}
		);
		return () => backHandler.remove();
	}, []);
	if (!loaded) return <AppLoading />;

	return (
		<View style={styles.container}>
			{/* <StatusBar style={{ height: 200 }} /> */}
			{currentScreen === 0 && (
				<MainScreen
					setCurrentScreen={setCurrentScreen}
					setLastScreen={setLastScreen}
				/>
			)}
			{currentScreen === 1 && (
				<SearchScreen
					setCurrentScreen={setCurrentScreen}
					setLastScreen={setLastScreen}
				/>
			)}
		</View>
	);
}
