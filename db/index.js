import { openDatabase } from 'expo-sqlite';

const dbLocal = openDatabase('user.db');

export const init = () => {
	dbLocal.transaction((tx) => {
		tx.executeSql('CREATE TABLE user (email TEXT, password TEXT)', []);
	});
};

export const removeUser = () => {
	dbLocal.transaction((tx) => {
		tx.executeSql('DELETE FROM user;', []);
	});
};

export const insertUser = (email, password) => {
	removeUser();
	dbLocal.transaction((tx) => {
		tx.executeSql(`INSERT INTO user (email, password) VALUES (?, ?);`, [
			email,
			password,
		]);
	});
};

export const fetchUser = (setUser) => {
	dbLocal.transaction((tx) => {
		tx.executeSql('SELECT * FROM user', [], (tx, results) => {
			if (results.rows._array[0]) {
				setUser({
					email: results.rows._array[0].email,
					password: results.rows._array[0].password,
				});
			}
		});
	});
};
