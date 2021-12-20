import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import { Alert, Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../styles/styles';

export const ImageSelector = (props) => {
	const [pickedUri, setPickedUri] = useState();
	const verifyPermissions = async () => {
		const res = await ImagePicker.requestCameraPermissionsAsync();
		if (res.status !== 'granted') {
			Alert.alert(
				'Permisos insuficientes',
				'Necesita dar permisos de la cámara para usar la aplcación',
				[{ text: 'Ok' }]
			);
			return false;
		}
		return true;
	};
	const handlerTakeImage = async () => {
		const isCameraOk = await verifyPermissions();
		if (!isCameraOk) {
			return;
		}

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3],
			quality: 0.8,
		});

		setPickedUri(image.uri);
		props.onImage(image.uri);
	};
	return (
		<View>
			<View style={styles.cameraPreview}>
				{!pickedUri ? (
					<Text>Tomá una foto</Text>
				) : (
					<Image style={styles.img} source={{ uri: pickedUri }} />
				)}
			</View>
			<Pressable style={styles.wideBtn} onPress={() => handlerTakeImage()}>
				<Text style={{ color: 'white', fontWeight: 'bold' }}>
					Tomar foto de perfil
				</Text>
			</Pressable>
		</View>
	);
};
