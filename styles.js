import { StyleSheet } from 'react-native';

const colors = {
	azul: '#0455BF',
};

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 40,
	},

	top: {
		width: '100%',
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
	filters: {
		position: 'absolute',
		right: 10,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'roboto',
		color: '#757575',
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
		width: '100%',
		padding: 20,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: -1, height: -1 },
		shadowOpacity: 0.8,
		shadowRadius: 1,
		height: 60,
	},
	footerSeparator: {
		width: 2,
		height: '75%',
		position: 'absolute',
		color: colors.azul,
	},
	profiles: {
		marginTop: 30,
		marginBottom: 30,
		width: '100%',
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
});
