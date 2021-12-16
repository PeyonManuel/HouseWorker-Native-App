import { FlatList, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchResult } from './SearchResult';
import { styles } from '../styles/styles';

export const SearchScreen = () => {
	const dispatch = useDispatch();
	const profiles = useSelector((state) => state.profiles.profiles);
	return (
		<View>
			<FlatList
				data={profiles}
				renderItem={({ item }) => <SearchResult result={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
