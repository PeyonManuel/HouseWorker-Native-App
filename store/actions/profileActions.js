import { collection, getDocs, query, where } from 'firebase/firestore/lite';

import { GET_PROFESIONS_FAIL } from './profesionActions';
import { db } from '../../firebase/config';
import { useDispatch } from 'react-redux';

export const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';

export const getProfiles = (filters) => (dispatch) => {
	dispatch({ type: GET_PROFILES_REQUEST });
	const profilesRef = collection(db, 'profiles');
	let q = profilesRef;
	if (filters.profesion !== -1 || filters.rating !== -1) {
		console.log(filters.profesion);
		q = query(
			profilesRef,
			where('profesionId', '==', filters.profesion),
			where('rating', '>=', filters.rating)
		);
	}
	getDocs(q)
		.then((res) => {
			const profiles = res.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			dispatch({ type: GET_PROFILES_SUCCESS, payload: { profiles } });
		})
		.catch((error) => dispatch({ type: GET_PROFESIONS_FAIL }));
};
