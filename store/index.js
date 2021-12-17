import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logInReducer, signUpReducer } from './reducers/userReducer';

import { getProfilesReducer } from './reducers/profileReducer';
import { profesionReducer } from './reducers/profesionReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	profesions: profesionReducer,
	logIn: logInReducer,
	signUp: signUpReducer,
	getProfiles: getProfilesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
