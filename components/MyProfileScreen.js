import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
	createProfileCleanup,
	getProfile,
} from '../store/actions/profileActions';
import { useDispatch, useSelector } from 'react-redux';

import { signOutProfile } from '../store/actions/userActions';
import { styles } from '../styles/styles';

export const MyProfileScreen = ({ navigation }) => {
	const logInRef = useSelector((state) => state.logIn);
	const { userId } = logInRef;
	const createProfileRef = useSelector((state) => state.createProfile);
	const { created } = createProfileRef;
	const profileRef = useSelector((state) => state.getProfile);
	const { loading, error, profile } = profileRef;
	const dispatch = useDispatch();
	useEffect(() => {
		if (userId) {
			dispatch(getProfile(userId));
			dispatch(createProfileCleanup());
		}
	}, [created]);

	const handleSignOut = () => {
		dispatch(signOutProfile());
	};

	return (
		<>
			<ScrollView>
				{userId ? (
					loading ? (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}>
							<Text>Cargando...</Text>
						</View>
					) : error ? (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								flex: 1,
							}}>
							<Text style={styles.errorMessage}>{error}</Text>
						</View>
					) : !profile ? (
						<View style={{ alignItems: 'center' }}>
							<Text style={styles.h2}>
								Parece que no tienes un perfil de trabajador aún
							</Text>
							<Pressable onPress={() => navigation.navigate('createProfile')}>
								<Text style={styles.link}>Crear perfil</Text>
							</Pressable>
						</View>
					) : (
						<View style={{ margin: 10 }}>
							<Text style={styles.h2}>Foto de perfil</Text>
							<Image
								style={styles.profilePicture}
								source={{ uri: profile.imgUrl }}
							/>
							<Text style={styles.h2}>Nombre</Text>
							<Text>{profile.name}</Text>
							<Text style={styles.h2}>Profesión</Text>
							<Text>{profile.profesion}</Text>
							<Text style={styles.h2}>Rating</Text>
							<Text
								style={{
									color: 'goldenrod',
								}}>{`${profile.rating} stars`}</Text>
						</View>
					)
				) : (
					<Text>Debes iniciar sesion para crear un perfil</Text>
				)}
			</ScrollView>
			<Pressable
				style={{ ...styles.wideBtn, marginTop: 10 }}
				onPress={() => handleSignOut()}>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>Salir</Text>
			</Pressable>
		</>
	);
};
