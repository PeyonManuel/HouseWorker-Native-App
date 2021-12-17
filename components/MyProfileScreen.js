import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getProfile } from '../store/actions/profileActions';
import { styles } from '../styles/styles';

export const MyProfileScreen = () => {
	const profileRef = useSelector((state) => state.getProfile);
	const { loading, error, profile } = profileRef;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProfile(1));
	}, []);
	useEffect(() => {
		console.log(profile);
	}, [profile]);
	return (
		<View>
			{loading ? (
				<Text>Cargando...</Text>
			) : error ? (
				<Text style={styles.errorMessage}>{error}</Text>
			) : (
				<View></View>
			)}
		</View>
	);
};
