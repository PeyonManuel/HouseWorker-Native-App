import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';

import { Filters } from '../components/Filters.js';
import { getProfesions } from '../store/actions/profesionActions.js';
import { styles } from '../styles/styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const MainScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const profesionsRes = useSelector((state) => state.profesions);
	const { loading, profesions, error } = profesionsRes;
	useEffect(() => {
		dispatch(getProfesions());
	}, []);
	const [openFilters, setOpenFilters] = useState(false);

	return (
		<View style={{ ...styles.container, paddingHorizontal: 10 }}>
			<Filters openFilters={openFilters} setOpenFilters={setOpenFilters} />
			<Pressable onPress={() => setOpenFilters(true)} style={styles.searchBar}>
				<Text style={styles.searchInput}>Busqueda con filtros</Text>
			</Pressable>
			{loading ? (
				<Text style={styles.suggestionsContainer}>Cargando</Text>
			) : error ? (
				<Text style={styles.suggestionsContainer}>{error}</Text>
			) : (
				<View style={styles.suggestionsContainer}>
					{profesions.map((prof) => (
						<Pressable
							key={prof.id}
							onPress={() => {
								navigation.navigate({
									name: 'search',
									params: { filters: { profesion: prof.id, rating: -1 } },
								});
							}}
							style={styles.suggestion}>
							<Text style={styles.item}>{prof.name}</Text>
						</Pressable>
					))}
				</View>
			)}
			<View style={styles.profiles}>
				<View style={styles.profile}>
					<Text>Perfil slider</Text>
				</View>
			</View>
		</View>
	);
};
