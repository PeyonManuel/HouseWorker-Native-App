import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
	getProfileReducer,
	getProfilesReducer,
} from './reducers/profileReducer';
import { logInReducer, signUpReducer } from './reducers/userReducer';

import { profesionReducer } from './reducers/profesionReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	profesions: profesionReducer,
	logIn: logInReducer,
	signUp: signUpReducer,
	getProfiles: getProfilesReducer,
	getProfile: getProfileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
