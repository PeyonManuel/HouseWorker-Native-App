import { Dimensions, StyleSheet } from 'react-native';

import { LoginStyles } from './LoginStyles';
import { SearchScreenStyles } from './SearchScreenStyles';

export const colors = {
	azul: '#0455BF',
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingTop: 35,
		paddingBottom: 10,
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
		flex: 0.7,
		borderRadius: 5,
		backgroundColor: '#F1F1F1',
		height: 40,
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 10,
	},
	searchInput: {
		width: '100%',
		marginRight: 10,
		fontWeight: 'bold',
	},
	suggestionsContainer: {
		marginTop: 20,
		flexWrap: 'wrap',
		alignItems: 'center',
		alignContent: 'center',
		width: '100%',
		flex: 9,
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
		marginTop: 15,
		marginBottom: 15,
		flex: 8,
	},
	profile: {
		borderRadius: 5,
		borderColor: colors.azul,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
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
	h4: {
		fontWeight: 'bold',
		fontSize: 12,
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
	errorMessage: {
		padding: 10,
		backgroundColor: '#ffcccb',
		borderRadius: 5,
	},
	wideBtn: {
		alignSelf: 'center',
		width: Dimensions.get('window').width * 0.95,
		alignItems: 'center',
		padding: 10,
		height: 40,
		marginBottom: 15,
		borderRadius: 5,
		backgroundColor: colors.azul,
	},
	generalInput: {
		width: '100%',
		marginBottom: 10,
		borderRadius: 5,
		borderColor: colors.azul,
		borderWidth: 1,
		padding: 10,
		height: 40,
	},
	cameraPreview: {
		borderRadius: 5,
		width: '100%',
		height: 200,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: colors.azul,
		borderWidth: 1,
	},
	profilePicture: {
		height: 250,
		width: Dimensions.get('window').width * 0.95,
		alignSelf: 'center',
	},
	...SearchScreenStyles,
	...LoginStyles,
});
