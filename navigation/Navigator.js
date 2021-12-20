import React, { useEffect, useState } from 'react';
import { colors, styles } from '../styles/styles';
import { useDispatch, useSelector } from 'react-redux';

import { CreateProfileScreen } from '../components/CreateProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { LoginNavigator } from './LoginNavigator';
import { MainScreen } from '../components/MainScreen';
import { MyProfileScreen } from '../components/MyProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen } from '../components/SearchScreen';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fetchUser } from '../db';
import { signInProfile } from '../store/actions/userActions';

const profileStack = createNativeStackNavigator();
const myProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
	const dispatch = useDispatch();
	const logInRef = useSelector((state) => state.logIn);
	const { userId } = logInRef;
	const [savedUser, setSavedUser] = useState({});

	useEffect(() => {
		fetchUser(setSavedUser);
	}, []);

	useEffect(() => {
		savedUser && savedUser.password && dispatch(signInProfile(savedUser));
	}, [savedUser]);

	const profileScreenRender = () => (
		<profileStack.Navigator initialRouteName='home'>
			<profileStack.Screen
				name='home'
				options={() => ({
					headerShown: false,
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

			<profileStack.Screen
				name='createProfile'
				options={() => ({
					title: 'Crear perfil',
					headerStyle: styles.h1,
				})}
				component={CreateProfileScreen}
			/>
		</profileStack.Navigator>
	);

	const myProfileRender = () => (
		<myProfileStack.Navigator>
			<myProfileStack.Screen
				name='profile'
				options={() => ({
					title: 'Mi perfil',
					headerStyle: styles.h1,
				})}
				component={MyProfileScreen}
			/>
		</myProfileStack.Navigator>
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
					name={'Mi perfil'}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Ionicons
									name='md-person-circle-outline'
									size={35}
									color={focused ? colors.azul : 'black'}></Ionicons>
							</View>
						),
					}}
					component={myProfileRender}></Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
	return <>{userId ? <MainNavigator /> : <LoginNavigator />}</>;
};
