import {
	GET_PROFILES_FAIL,
	GET_PROFILES_REQUEST,
	GET_PROFILES_SUCCESS,
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
