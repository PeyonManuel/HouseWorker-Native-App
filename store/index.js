import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
	createProfileReducer,
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
	createProfile: createProfileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
