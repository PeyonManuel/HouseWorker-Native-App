import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { styles } from '../styles/styles';

export const SearchResult = ({ result }) => {
	// const image = result.imgUrl;
	return (
		<View style={styles.searchResult}>
			<Image
				style={styles.searchResultImage}
				source={require('../images/pexels-photo-771742.jpeg')}
			/>
			<View style={{ flex: 4, padding: 4 }}>
				<Text style={styles.h2}>{result.name}</Text>
				<Text numberOfLines={4} style={styles.searchResultDescription}>
					{result.description}
				</Text>
			</View>
			<Text style={styles.searchResultRating}>{result.rating}</Text>
		</View>
	);
};
