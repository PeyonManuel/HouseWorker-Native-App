import {
	SIGN_IN_FAIL,
	SIGN_IN_REQUEST,
	SIGN_IN_SUCCESS,
	SIGN_UP_FAIL,
	SIGN_UP_REQUEST,
	SIGN_UP_SUCCESS,
} from '../actions/profileActions';

import { combineReducers } from 'redux';

export const signUpReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_UP_REQUEST:
			return { loading: true };
		case SIGN_UP_SUCCESS:
			return { loading: false };
		case SIGN_UP_FAIL:
			return { loading: false, error: action.payload.error };

		default:
			return state;
	}
};

export const logInReducer = (state = {}, action) => {
	switch (action.type) {
		case SIGN_IN_REQUEST:
			return { loading: true };
		case SIGN_IN_SUCCESS:
			return { loading: false, ...action.payload };
		case SIGN_IN_FAIL:
			return { loading: false, error: action.payload.error };
		default:
			return state;
	}
};
