export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

import { URL_AUTH_SIGNIN_WPASSWORD } from '../../firebase/database.js';
import { URL_AUTH_SIGNUP } from '../../firebase/database.js';
export const registerProfile =
	({ email, password }) =>
	async (dispatch) => {
		dispatch({ type: SIGN_UP_REQUEST });
		const response = await fetch(URL_AUTH_SIGNUP, {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				returnSecureToken: true,
			}),
		});
		const data = await response.json();
		if (!data.error) {
			dispatch({
				type: SIGN_UP_SUCCESS,
			});
			dispatch({
				type: SIGN_IN_SUCCESS,
				payload: { token: data.idToken, userId: data.localId },
			});
		}
		if (data.error) {
			dispatch({
				type: SIGN_UP_FAIL,
				payload: { error: data.error.errors[0].message },
			});
		}
	};

export const signInProfile =
	({ email, password }) =>
	async (dispatch) => {
		dispatch({ type: SIGN_IN_REQUEST });
		const response = await fetch(URL_AUTH_SIGNIN_WPASSWORD, {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
				returnSecureToken: true,
			}),
		});
		const data = await response.json();
		if (!data.error) {
			dispatch({
				type: SIGN_IN_SUCCESS,
				payload: { token: data.idToken, userId: data.localId },
			});
		}
		if (data.error) {
			dispatch({
				type: SIGN_IN_FAIL,
				payload: { error: data.error.errors[0].message },
			});
		}
	};
