import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore/lite';

import { db } from '../../firebase/config';

export const GET_PROFILES_REQUEST = 'GET_PROFILES_REQUEST';
export const GET_PROFILES_SUCCESS = 'GET_PROFILES_SUCCESS';
export const GET_PROFILES_FAIL = 'GET_PROFILES_FAIL';
export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const CREATE_PROFILE_REQUEST = 'CREATE_PROFILE_REQUEST';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAIL = 'CREATE_PROFILE_FAIL';

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
	getDocs(q)
		.then((res) => {
			const profile = res.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}))[0];
			if (profile) {
				dispatch({
					type: GET_PROFILE_SUCCESS,
					payload: { profile: profile },
				});
			}
			if (!profile) {
				dispatch({
					type: GET_PROFILE_SUCCESS,
					payload: { profile: null },
				});
			}
		})
		.catch((error) => {
			dispatch({ type: GET_PROFILE_FAIL, payload: { error } });
		});
};

export const createProfile = (values) => (dispatch) => {
	dispatch({ type: CREATE_PROFILE_REQUEST });
	const descriptionLorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan ante ac massa semper condimentum. Duis at dignissim arcu, id hendrerit ante. Maecenas ut tellus aliquet, aliquam quam ac, tristique neque. Nam a lorem tellus. Phasellus felis sem, blandit sed pulvinar nec, semper sed tellus. Ut efficitur maximus nisi, nec aliquam dolor facilisis id. Donec nec malesuada lorem. Maecenas tortor nisi, mollis efficitur congue at, pulvinar vehicula est. Donec quis tincidunt neque. Sed posuere maximus lobortis. Proin commodo eget dui id fringilla. Nam nec pretium tellus. Aenean congue, felis in consequat lacinia, quam mi consequat ex, quis posuere arcu lacus nec leo. Cras vestibulum iaculis diam, non accumsan elit. Curabitur venenatis risus id tortor convallis blandit. Mauris odio lectus, tempus convallis nisl gravida, aliquet cursus odio.';
	const profileRef = collection(db, 'profiles');
	const q = query(profileRef, where('userId', '==', values.userId));

	getDocs(q)
		.then((res) => {
			if (res.docs.length === 0) {
				addDoc(collection(db, 'profiles'), {
					...values,
					rating: 4,
					description: descriptionLorem,
				}).then((res) => {
					if (res.id) {
						dispatch({ type: CREATE_PROFILE_SUCCESS });
					}
				});
			}
			if (res.docs.length > 0) {
				dispatch({
					type: CREATE_PROFILE_FAIL,
					payload: { error: 'Este usuario ya tiene perfil' },
				});
			}
		})
		.catch((error) =>
			dispatch({ type: CREATE_PROFILE_FAIL, payload: { error } })
		);
};
