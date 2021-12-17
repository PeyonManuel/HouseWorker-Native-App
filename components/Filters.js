import {
	Button,
	Dimensions,
	FlatList,
	Modal,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckCircle from '../svgs/CheckCircle';
import Times from '../svgs/Times';
import { getProfesions } from '../store/actions/profesionActions';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export const Filters = ({ openFilters, setOpenFilters }) => {
	const navigation = useNavigation();
	const profesionsRef = useSelector((state) => state.profesions);
	const { loading, error, profesions } = profesionsRef;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProfesions());
	}, []);
	const [selectedProfesion, setSelectedProfesion] = useState(-1);
	const [rating, setRating] = useState([4.5, 4, 3.5, 3, 2.5]);
	const [selectedRating, setSelectedRating] = useState(-1);
	const [filters, setFilters] = useState({ rating: -1, profesion: -1 });
	useEffect(() => {
		setFilters({ ...filters, rating: selectedRating });
	}, [selectedRating]);
	useEffect(() => {
		setFilters({ ...filters, profesion: selectedProfesion });
	}, [selectedProfesion]);
	return (
		<Modal visible={openFilters}>
			{loading ? (
				<Text>Cargando...</Text>
			) : error ? (
				<Text style={styles.errorMessage}>{error}</Text>
			) : (
				<>
					<View style={{ flex: 28 }}>
						<TouchableOpacity
							style={styles.closeFiltersBtn}
							onPress={() => setOpenFilters(false)}>
							{<Times style={{ width: 20, height: 20, color: 'black' }} />}
						</TouchableOpacity>
						<Text style={{ ...styles.h1, marginBottom: 0 }}>Profesión</Text>
						<View style={styles.filtersContainer}>
							<FlatList
								data={profesions}
								renderItem={({ item }) => (
									<Pressable
										style={styles.filterItem}
										onPress={() => {
											if (selectedProfesion !== item.id) {
												setSelectedProfesion(item.id);
											}
											if (selectedProfesion === item.id) {
												setSelectedProfesion(-1);
											}
										}}>
										<Text>{item.name}</Text>
										{selectedProfesion === item.id && (
											<CheckCircle style={{ width: 20, color: 'lightgreen' }} />
										)}
									</Pressable>
								)}
								keyExtractor={(profesion) => profesion.id}
							/>
						</View>
						<Text style={{ ...styles.h1, marginBottom: 0 }}>Valoración</Text>
						<View style={styles.filtersContainer}>
							<FlatList
								data={rating}
								renderItem={({ item }) => (
									<Pressable
										style={styles.filterItem}
										onPress={() => {
											if (selectedRating !== item) {
												setSelectedRating(item);
											}
											if (selectedRating === item) {
												setSelectedRating(-1);
											}
										}}>
										<Text>{item}</Text>
										{selectedRating === item && (
											<CheckCircle style={{ width: 20, color: 'lightgreen' }} />
										)}
									</Pressable>
								)}
								keyExtractor={(item) => item}
							/>
						</View>
					</View>
					<Pressable style={styles.searchBtn}>
						<Text
							style={{ fontWeight: 'bold', color: 'white' }}
							onPress={() => {
								setOpenFilters(false);
								navigation.navigate({ name: 'search', params: { filters } });
							}}>
							Buscar
						</Text>
					</Pressable>
				</>
			)}
		</Modal>
	);
};
