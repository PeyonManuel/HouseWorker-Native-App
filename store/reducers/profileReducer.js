import {
	CREATE_PROFILE_CLEANUP,
	CREATE_PROFILE_FAIL,
	CREATE_PROFILE_REQUEST,
	CREATE_PROFILE_SUCCESS,
	GET_PROFILES_FAIL,
	GET_PROFILES_REQUEST,
	GET_PROFILES_SUCCESS,
	GET_PROFILE_FAIL,
	GET_PROFILE_REQUEST,
	GET_PROFILE_SUCCESS,
} from '../actions/profileActions';

export const getProfilesReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PROFILES_REQUEST:
			return { loading: true };
		case GET_PROFILES_SUCCESS:
			return { loading: false, profiles: action.payload.profiles };
		case GET_PROFILES_FAIL:
			return { loading: false, error: action.payload.error };
		default:
			return state;
	}
};

export const getProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PROFILE_REQUEST:
			return { loading: true };
		case GET_PROFILE_SUCCESS:
			return { loading: false, profile: action.payload.profile };
		case GET_PROFILE_FAIL:
			return { loading: false, error: action.payload.error };
		default:
			return state;
	}
};

export const createProfileReducer = (state = { created: false }, action) => {
	switch (action.type) {
		case CREATE_PROFILE_REQUEST:
			return { loading: true, created: false };
		case CREATE_PROFILE_SUCCESS:
			return { loading: false, created: true };
		case CREATE_PROFILE_FAIL:
			return { loading: false, error: action.payload.error, created: false };
		case CREATE_PROFILE_CLEANUP:
			return {};
		default:
			return state;
	}
};
