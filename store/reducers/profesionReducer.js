import {
	GET_PROFESIONS_FAIL,
	GET_PROFESIONS_REQUEST,
	GET_PROFESIONS_SUCCESS,
} from '../actions/profesionActions';

const initialState = {
	loading: true,
};

export const profesionReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROFESIONS_REQUEST:
			return { loading: true };
		case GET_PROFESIONS_SUCCESS:
			return { loading: false, profesions: action.payload };
		case GET_PROFESIONS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
