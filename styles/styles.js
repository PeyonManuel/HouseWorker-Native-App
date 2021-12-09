import { Dimensions, StyleSheet } from 'react-native';

import { SearchScreenStyles } from './SearchScreenStyles';

const colors = {
	azul: '#0455BF',
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	top: {
		width: Dimensions.get('window').width,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#ffff',
	},
	imgContainer: {
		height: 40,
		width: '50%',
		overflow: 'hidden',
	},
	img: {
		height: '100%',
		width: '100%',
	},
	link: {
		color: colors.azul,
		fontWeight: 'bold',
		fontSize: 18,
	},
	searchBar: {
		marginTop: 20,
		borderRadius: 5,
		backgroundColor: '#F1F1F1',
		height: 40,
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	searchInput: {
		width: '100%',
		marginRight: 10,
	},
	filtersBtn: {
		position: 'absolute',
		right: 10,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
	suggestionsContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
	suggestion: {
		borderRadius: 5,
		borderColor: colors.azul,
		borderWidth: 2,
		width: 90,
		padding: 50,
		alignItems: 'center',
		justifyContent: 'center',
		height: 25,
		margin: 5,
		position: 'relative',
	},
	item: {
		position: 'absolute',
		color: 'black',
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 50,
		width: Dimensions.get('window').width,
		padding: 20,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: -1, height: -1 },
		shadowOpacity: 0.8,
		shadowRadius: 1,
		height: 60,
		position: 'relative',
	},
	footerSeparator: {
		width: 0,
		borderColor: colors.azul,
		borderWidth: 1,
		height: '100%',
		left: '100%',
		color: colors.azul,
	},
	profiles: {
		marginTop: 30,
		marginBottom: 30,
		width: Dimensions.get('window').width * 0.9,
	},
	profile: {
		borderRadius: 5,
		borderColor: colors.azul,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		height: 270,
		margin: 10,
	},
	closeFiltersBtn: {
		position: 'absolute',
		top: 5,
		right: 5,
		padding: 10,
		zIndex: 2,
	},
	h1: {
		fontWeight: 'bold',
		padding: 10,
		marginBottom: 10,
		fontSize: 18,
		backgroundColor: colors.azul,
		width: Dimensions.get('window').width,
	},
	h2: {
		fontWeight: 'bold',
		color: 'black',
		fontSize: 16,
	},
	filtersContainer: {
		borderColor: colors.azul,
		borderTopWidth: 1,
	},
	filterItem: {
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'rgba(168, 218, 235, 0.25)',
		borderColor: colors.azul,
		borderBottomWidth: 1,
	},
	...SearchScreenStyles,
});
