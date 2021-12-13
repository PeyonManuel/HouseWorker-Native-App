import { BackHandler, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import AppLoading from 'expo-app-loading';
import { Navigator } from './navigation/Navigator.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchScreen } from './components/SearchScreen.js';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles/styles';
import { useFonts } from 'expo-font';

export default function App() {
	const [loaded] = useFonts({
		Inter: require('./fonts/Inter.ttf'),
	});
	if (!loaded) return <AppLoading />;

	return (
		<View style={styles.container}>
			{/* <SafeAreaView /> */}
			{/* <StatusBar style={{ height: 200 }} /> */}
			<Navigator />
		</View>
	);
}
