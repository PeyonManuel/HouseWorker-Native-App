import { FlatList, Text, View } from 'react-native';

import React from 'react';
import { SearchResult } from './SearchResult';
import { results } from '../data';
import { styles } from '../styles/styles';

export const SearchScreen = () => {
	const searchResults = results;
	return (
		<View>
			<Text style={styles.h1}>Resultados</Text>
			<FlatList
				data={searchResults}
				renderItem={({ item }) => <SearchResult result={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
