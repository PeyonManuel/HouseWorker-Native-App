import { StyleSheet } from 'react-native';
const colors = {
	azul: '#0455BF',
};
export const SearchScreenStyles = StyleSheet.create({
	searchResult: {
		margin: 10,
		borderColor: colors.azul,
		borderRadius: 5,
		borderWidth: 2,
		flexDirection: 'row',
		position: 'relative',
	},
	searchResultImage: {
		width: 100,
		height: 100,
		marginRight: 10,
	},
	searchResultRating: {
		position: 'absolute',
		right: 10,
		top: 10,
		fontWeight: 'bold',
		color: 'goldenrod',
	},
});
