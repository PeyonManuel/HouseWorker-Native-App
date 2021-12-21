import { Pressable, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, styles } from '../styles/styles';
import { createProfile, getProfile } from '../store/actions/profileActions';
import { ref, uploadBytes } from '@firebase/storage';
import { useDispatch, useSelector } from 'react-redux';

import AppLoading from 'expo-app-loading';
import DropDownPicker from 'react-native-dropdown-picker';
import { ImageSelector } from './ImageSelector';
import { fireStorage } from '../firebase/config';
import { getProfesions } from '../store/actions/profesionActions';
import { v4 as uuidv4 } from 'uuid';

export const CreateProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const logInRef = useSelector((state) => state.logIn);
	const { userId } = logInRef;
	const createProfileRef = useSelector((state) => state.createProfile);
	const { created } = createProfileRef;
	const profesionsRes = useSelector((state) => state.profesions);
	const { loading, profesions, error } = profesionsRes;
	const [open, setOpen] = useState(false);
	const [profesion, setSelectedProfesion] = useState(null);
	const [profesionId, setSelectedProfesionId] = useState(null);
	const [imageUri, setImageUri] = useState(null);
	const [newProfileImageUrl, setNewProfileImageUrl] = useState(null);
	const [name, setName] = useState('');
	const [loadingImg, setLoadingImg] = useState(false);
	const [creatingError, setCreatingError] = useState('');

	useEffect(() => {
		dispatch(getProfesions());
	}, []);

	useEffect(() => {
		if (profesionId) {
			const profesionFind = profesions.find((prof) => prof.id === profesionId);
			setSelectedProfesion(profesions[profesions.indexOf(profesionFind)].name);
		}
	}, [profesionId]);

	useEffect(() => {
		created && navigation.navigate('profile');
	}, [created]);

	useEffect(() => {
		if (newProfileImageUrl) {
			dispatch(
				createProfile({
					name,
					profesion,
					profesionId,
					imgUrl: newProfileImageUrl,
					userId,
				})
			);
		}
	}, [newProfileImageUrl]);

	const uploadImageAsyncasync = async (uri) => {
		const blob = await new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.onerror = function (e) {
				console.log(e);
				reject(new TypeError('Network request failed'));
			};
			xhr.responseType = 'blob';
			xhr.open('GET', uri, true);
			xhr.send(null);
		});
		const randomName = uuidv4();
		setNewProfileImageUrl(
			`https://firebasestorage.googleapis.com/v0/b/houseworker-8d25a.appspot.com/o/${randomName}?alt=media`
		);
		const fileRef = ref(fireStorage, randomName);
		const result = await uploadBytes(fileRef, blob);
		blob.close();
	};
	const handleCreateProfile = async (uri) => {
		setCreatingError('');
		if (name && profesionId && uri) {
			setLoadingImg(true);
			try {
				await uploadImageAsyncasync(uri);
				setLoadingImg(false);
			} catch (error) {
				if (newProfileImageUrl === null) {
					setLoadingImg(false);
				}
			}
		}
		if (!name || !profesionId || !uri) {
			setCreatingError('Faltan ingresar datos');
		}
	};
	return (
		<View style={{ ...styles.container, padding: 10 }}>
			{loading ? (
				<AppLoading />
			) : error ? (
				<Text style={styles.errorMessage}>{error}</Text>
			) : (
				<>
					<TextInput
						value={name}
						onChangeText={(text) => setName(text)}
						style={styles.generalInput}
						placeholder='Nombre'></TextInput>
					<DropDownPicker
						placeholder='Selecciona tu profesión'
						style={{ borderColor: colors.azul, marginBottom: 10 }}
						open={open}
						value={profesionId}
						items={profesions.map((prof) => ({
							label: prof.name,
							value: prof.id,
						}))}
						setOpen={setOpen}
						setValue={setSelectedProfesionId}
					/>
					<ImageSelector onImage={(image) => setImageUri(image)} />
					<Pressable
						disabled={loadingImg}
						style={
							!loadingImg
								? { ...styles.wideBtn }
								: { ...styles.wideBtn, backgroundColor: 'gray' }
						}
						onPress={() => handleCreateProfile(imageUri)}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>
							Crear perfil
						</Text>
					</Pressable>
					{creatingError ? (
						<Text style={styles.errorMessage}>{creatingError}</Text>
					) : (
						<></>
					)}
				</>
			)}
		</View>
	);
};
