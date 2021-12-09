import {
	Button,
	FlatList,
	Modal,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

import CheckCircle from '../svgs/CheckCircle';
import Times from '../svgs/Times';
import { styles } from '../styles/styles';

export const Filters = ({ openFilters, setOpenFilters }) => {
	const [profesions, setProfesions] = useState([
		{ id: 0, profesion: 'Pintor' },
		{ id: 1, profesion: 'Gasista' },
		{ id: 2, profesion: 'Jardinero' },
		{ id: 3, profesion: 'Plomero' },
		{ id: 4, profesion: 'Electricista' },
	]);
	const [selectedProfesion, setSelectedProfesion] = useState(-1);
	const [availabilities, setAvaiabilities] = useState([]);
	const [rating, setRating] = useState([]);
	return (
		<Modal visible={openFilters}>
			<TouchableOpacity
				style={styles.closeFiltersBtn}
				onPress={() => setOpenFilters(false)}>
				{<Times style={{ width: 20, height: 20, color: 'black' }} />}
			</TouchableOpacity>
			<Text style={styles.h1}>Profesión</Text>
			<View style={styles.filtersContainer}>
				<FlatList
					data={profesions}
					renderItem={({ item }) => (
						<Pressable
							style={styles.filterItem}
							onPress={() => setSelectedProfesion(item.id)}>
							<Text>{item.profesion}</Text>
							{selectedProfesion === item.id && (
								<CheckCircle style={{ width: 20, color: 'lightgreen' }} />
							)}
						</Pressable>
					)}
					keyExtractor={(profesion) => profesion.id}
				/>
			</View>
		</Modal>
	);
};
