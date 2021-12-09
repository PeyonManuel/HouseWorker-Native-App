import {
	BackHandler,
	FlatList,
	Image,
	Pressable,
	Text,
	TextInput,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Filters } from '../components/Filters.js';
import { styles } from '../styles/styles';

export const MainScreen = ({ setCurrentScreen, setLastScreen }) => {
	const [logo, setLogo] = useState(null);
	useEffect(() => {
		setLogo(require('../images/Logo.png'));
	}, []);
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
		<View style={styles.container}>
			<Filters openFilters={openFilters} setOpenFilters={setOpenFilters} />
			<View style={styles.top}>
				<View style={styles.imgContainer}>
					<Image style={styles.img} source={logo} />
				</View>
				<Text style={styles.link}>Mi perfil</Text>
			</View>
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
							setLastScreen(0);
							setCurrentScreen(1);
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
			<View style={styles.footer}>
				<Text>Profile</Text>
				<View style={styles.footerSeparator} />
				<Text>Trabajos cortos</Text>
			</View>
		</View>
	);
};
