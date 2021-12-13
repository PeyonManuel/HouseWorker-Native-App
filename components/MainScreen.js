import {
	FlatList,
	Image,
	Pressable,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, { Fragment, useState } from 'react';

import { Filters } from '../components/Filters.js';
import { styles } from '../styles/styles';

export const MainScreen = ({ navigation }) => {
	const suggestions = [
		'Pintor',
		'Gasista',
		'Jardinero',
		'Plomero',
		'Electricista',
		'Instalación',
	];
	const [openFilters, setOpenFilters] = useState(false);

	return (
		<View style={{ ...styles.container, paddingHorizontal: 10 }}>
			<Filters openFilters={openFilters} setOpenFilters={setOpenFilters} />

			<View style={styles.searchBar}>
				<TextInput style={styles.searchInput} placeholder='Buscar'></TextInput>
				<Pressable
					style={styles.filtersBtn}
					onPress={() => setOpenFilters(true)}>
					<Text style={{ fontFamily: 'Inter', fontWeight: 'bold' }}>
						Filtros
					</Text>
				</Pressable>
			</View>
			<FlatList
				numColumns={3}
				contentContainerStyle={styles.suggestionsContainer}
				data={suggestions}
				renderItem={(suggestion) => (
					<Pressable
						onPress={() => {
							navigation.navigate('search');
						}}
						style={styles.suggestion}>
						<Text style={styles.item}>{suggestion.item}</Text>
					</Pressable>
				)}
				keyExtractor={(item) => item}></FlatList>
			<View style={styles.profiles}>
				<View style={styles.profile}>
					<Text>Perfil slider</Text>
				</View>
			</View>
		</View>
	);
};
