import { LoginScreen } from '../components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RegisterScreen } from '../components/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const loginStack = createNativeStackNavigator();

export const LoginNavigator = () => (
	<NavigationContainer>
		<loginStack.Navigator
			initialRouteName='loginScreen'
			screenOptions={{ headerShown: false }}>
			<loginStack.Screen
				name='loginScreen'
				component={LoginScreen}></loginStack.Screen>
			<loginStack.Screen
				name='registerScreen'
				component={RegisterScreen}></loginStack.Screen>
		</loginStack.Navigator>
	</NavigationContainer>
);
