import {
	Button,
	FlatList,
	Image,
	Pressable,
	ScrollView,
	Text,
	TextInput,
	Touchable,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { Contador } from './components/Contador';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

export default function App() {
	const [logo, setLogo] = useState(null);
	useEffect(() => {
		setLogo(require('./images/Logo.png'));
	}, []);
	const suggestions = [
		'Pintor',
		'Gasista',
		'Jardinero',
		'Plomero',
		'Electricista',
		'Instalación',
	];
	return (
		<View style={styles.container}>
			<StatusBar style={styles.statusBar} />
			<View style={styles.top}>
				<View style={styles.imgContainer}>
					<Image style={styles.img} source={logo} />
				</View>
				<Text style={styles.link}>Mi perfil</Text>
			</View>
			<View style={styles.searchBar}>
				<TextInput style={styles.searchInput} placeholder='Buscar'></TextInput>
				<Pressable style={styles.filters}>
					<Text>Filtros</Text>
				</Pressable>
			</View>
			<FlatList
				numColumns={3}
				contentContainerStyle={styles.suggestionsContainer}
				data={suggestions}
				renderItem={(suggestion) => (
					<View style={styles.suggestion}>
						<Text style={styles.item}>{suggestion.item}</Text>
					</View>
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
}
