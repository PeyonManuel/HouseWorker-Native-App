import { FlatList, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchResult } from './SearchResult';
import { getProfiles } from '../store/actions/profileActions';
import { styles } from '../styles/styles';

export const SearchScreen = ({ route }) => {
	const { filters } = route.params;
	const dispatch = useDispatch();
	const profilesRef = useSelector((state) => state.getProfiles);
	const { loading, error, profiles } = profilesRef;
	useEffect(() => {
		dispatch(getProfiles(filters));
	}, []);
	return (
		<View>
			{loading ? (
				<Text>Cargando...</Text>
			) : error ? (
				<Text style={styles.errorMessage}>{error}</Text>
			) : profiles && profiles.length > 0 ? (
				<FlatList
					data={profiles}
					renderItem={({ item }) => <SearchResult result={item} />}
					keyExtractor={(item) => item.id}
				/>
			) : (
				<Text style={styles.h2}>No se han encontrado perfiles</Text>
			)}
		</View>
	);
};
