import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { colors, styles } from '../styles/styles';

import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginNavigator } from './LoginNavigator';
import { MainScreen } from '../components/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen } from '../components/SearchScreen';
import { ShortWorksScreen } from '../components/ShortWorksScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const profileStack = createNativeStackNavigator();
const shortJobsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
	const logInRef = useSelector((state) => state.logIn);
	const { userId } = logInRef;
	const profileScreenRender = () => (
		<profileStack.Navigator initialRouteName='home'>
			<profileStack.Screen
				name='home'
				options={() => ({
					header: (props) => (
						<View style={styles.top}>
							<View style={styles.imgContainer}>
								<Image
									style={styles.img}
									source={require('../images/Logo.png')}
								/>
							</View>
							<Text style={styles.link}>Mi perfil</Text>
						</View>
					),
				})}
				component={MainScreen}
			/>
			<profileStack.Screen
				name='search'
				options={() => ({
					title: 'Busqueda',
					headerStyle: styles.h1,
				})}
				component={SearchScreen}
			/>
		</profileStack.Navigator>
	);

	const shortJobsRender = () => (
		<shortJobsStack.Navigator>
			<shortJobsStack.Screen
				name='mainScreen'
				options={() => ({
					header: (props) => (
						<View style={styles.top}>
							<View style={styles.imgContainer}>
								<Image
									style={styles.img}
									source={require('../images/Logo.png')}
								/>
							</View>
							<Text style={styles.link}>Mi perfil</Text>
						</View>
					),
				})}
				component={ShortWorksScreen}></shortJobsStack.Screen>
		</shortJobsStack.Navigator>
	);
	const MainNavigator = () => (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Tab.Screen
					name={'Perfiles'}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Ionicons
									name='md-people-circle-outline'
									size={35}
									color={focused ? colors.azul : 'black'}></Ionicons>
							</View>
						),
					}}
					component={profileScreenRender}></Tab.Screen>
				<Tab.Screen
					name={'Trabajos cortos'}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Ionicons
									name='md-notifications-circle-outline'
									size={35}
									color={focused ? colors.azul : 'black'}></Ionicons>
							</View>
						),
					}}
					component={shortJobsRender}></Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
	return <>{!userId ? <MainNavigator /> : <LoginNavigator />}</>;
};
