export const GET_PROFESIONS_REQUEST = 'GET_PROFESIONS_REQUEST';
export const GET_PROFESIONS_SUCCESS = 'GET_PROFESIONS_SUCCESS';
export const GET_PROFESIONS_FAIL = 'GET_PROFESIONS_FAIL';

import { collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../../firebase/config.js';

export const getProfesions = () => (dispatch) => {
	const profesionRef = collection(db, 'profesions');
	getDocs(profesionRef)
		.then((res) => {
			const profesions = res.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			dispatch({
				type: GET_PROFESIONS_SUCCESS,
				payload: profesions,
			});
		})
		.catch((error) => {
			dispatch({
				type: GET_PROFESIONS_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			});
		});
};
