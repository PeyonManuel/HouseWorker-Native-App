import {
	collection,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore/lite';

import { db } from '../../firebase/config';
import { useDispatch } from 'react-redux';

export const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';

export const getProfiles = (filters) => (dispatch) => {
	dispatch({ type: GET_PROFILES_REQUEST });
	const profilesRef = collection(db, 'profiles');
	let q = profilesRef;
	if (filters.profesion !== -1 || filters.rating !== -1) {
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
		.catch((error) =>
			dispatch({ type: GET_PROFILES_FAIL, payload: { error } })
		);
};

export const getProfile = (userId) => (dispatch) => {
	dispatch({ type: GET_PROFILE_REQUEST });
	const profileRef = collection(db, 'profiles');
	const q = query(profileRef, where('userId', '==', userId));

	getDoc(docRef)
		.then((doc) => {
			if (doc.data()) {
				dispatch({
					type: GET_PROFILE_SUCCESS,
					payload: { profile: { id: doc.id, ...doc.data() } },
				});
			}
		})
		.catch((error) => {
			dispatch({ type: GET_PROFILE_FAIL, payload: { error } });
		});
};
