import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { styles } from '../styles/styles';

export const SearchResult = ({ result }) => {
	return (
		<View style={styles.searchResult}>
			<Image style={styles.searchResultImage} source={{ uri: result.imgUrl }} />
			<View style={{ flex: 4, padding: 4 }}>
				<Text style={styles.h2}>{result.name}</Text>
				<Text style={styles.h4}>{result.profesion}</Text>
				<Text numberOfLines={3} style={styles.searchResultDescription}>
					{result.description}
				</Text>
			</View>
			<Text style={styles.searchResultRating}>{result.rating}</Text>
		</View>
	);
};
