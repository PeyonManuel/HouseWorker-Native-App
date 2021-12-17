import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInProfile } from '../store/actions/userActions';
import { styles } from '../styles/styles';

export const LoginScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const logInRef = useSelector((state) => state.logIn);
	const { loading, error } = logInRef;
	const [values, setValues] = useState({ email: '', password: '' });
	const handleValuesChange = (name, value) => {
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSignInBtn = () => {
		dispatch(signInProfile({ email: values.email, password: values.password }));
	};
	return (
		<View
			style={{
				...styles.container,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<View style={styles.loginBox}>
				<TextInput
					style={styles.loginInput}
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(value) => handleValuesChange('email', value)}
					placeholder='Correo electronico'></TextInput>
				<TextInput
					secureTextEntry={true}
					style={styles.loginInput}
					autoCapitalize='none'
					onChangeText={(value) => handleValuesChange('password', value)}
					placeholder='Contraseña'></TextInput>
				<Pressable
					style={
						!loading
							? styles.loginBtn
							: { ...styles.loginBtn, backgroundColor: 'gray' }
					}
					onPress={() => !loading && handleSignInBtn()}>
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: 16,
							textAlign: 'center',
						}}>
						Iniciar Sesión
					</Text>
				</Pressable>
				{error && (
					<Text
						style={{ ...styles.errorMessage, marginTop: 10, width: '100%' }}>
						{error}
					</Text>
				)}
				<Text style={{ marginTop: 10 }}>¿No tenés cuenta aún?</Text>
				<Pressable onPress={() => navigation.navigate('registerScreen')}>
					<Text style={styles.registerLink}>Registrate</Text>
				</Pressable>
			</View>
		</View>
	);
};
