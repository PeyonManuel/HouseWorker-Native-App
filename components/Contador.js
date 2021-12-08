import { Button, Text } from 'react-native';
import React, { Fragment, useState } from 'react';

export const Contador = () => {
	const [numero, setNumero] = useState(0);
	return (
		<Fragment>
			<Text>Cantidad de Contasdasdfsador: {numero}</Text>
			<Button title='aumentar' onPress={() => setNumero(numero + 1)}></Button>
			<Button title='reducir' onPress={() => setNumero(numero - 1)}></Button>
		</Fragment>
	);
};
