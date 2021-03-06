import { Dimensions, StyleSheet } from 'react-native';

const colors = {
	azul: '#0455BF',
};
export const LoginStyles = StyleSheet.create({
	loginBox: {
		padding: 20,
		borderRadius: 5,
		borderColor: colors.azul,
		borderWidth: 2,
		width: Dimensions.get('window').width * 0.66,
		alignItems: 'center',
	},
	loginBtn: {
		padding: 5,
		backgroundColor: colors.azul,
		borderRadius: 5,
		width: '100%',
	},

	registerLink: {
		color: colors.azul,
		fontWeight: 'bold',
	},
});
