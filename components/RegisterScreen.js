import { Image, Pressable, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerProfile } from '../store/actions/userActions';
import { styles } from '../styles/styles';

export const RegisterScreen = ({ navigation }) => {
	const signUpRef = useSelector((state) => state.signUp);
	const { loading, error } = signUpRef;
	const dispatch = useDispatch();
	const [values, setValues] = useState({ email: '', password: '' });
	const handleValuesChange = (name, value) => {
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleRegisterBtn = () => {
		dispatch(
			registerProfile({ email: values.email, password: values.password })
		);
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
					onChangeText={(value) => handleValuesChange('email', value)}
					style={styles.generalInput}
					keyboardType='email-address'
					autoCapitalize='none'
					placeholder='Correo electronico'></TextInput>
				<TextInput
					onChangeText={(value) => handleValuesChange('password', value)}
					style={styles.generalInput}
					autoCapitalize='none'
					secureTextEntry={true}
					placeholder='Contraseña'></TextInput>
				<Pressable
					style={
						!loading
							? styles.loginBtn
							: { ...styles.loginBtn, backgroundColor: 'gray' }
					}
					onPress={() => {
						!loading && handleRegisterBtn();
					}}>
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: 16,
							textAlign: 'center',
						}}>
						Registrarse
					</Text>
				</Pressable>
				{error && (
					<Text
						style={{ ...styles.errorMessage, marginTop: 10, width: '100%' }}>
						{error}
					</Text>
				)}
				<Text style={{ marginTop: 10 }}>¿Ya tenes cuenta?</Text>
				<Pressable onPress={() => navigation.navigate('loginScreen')}>
					<Text style={styles.registerLink}>Inicia Sesión</Text>
				</Pressable>
			</View>
		</View>
	);
};
