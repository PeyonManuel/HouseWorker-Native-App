import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
	logInReducer,
	profileReducer,
	signUpReducer,
} from './reducers/profileReducer';

import { profesionReducer } from './reducers/profesionReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	profesions: profesionReducer,
	logIn: logInReducer,
	signUp: signUpReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
