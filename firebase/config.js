import 'firebase/auth';

import * as firebase from 'firebase/app';

import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBulgaICmLuB0htY6A4FPF3OrBMvdPtFq8',
	authDomain: 'houseworker-8d25a.firebaseapp.com',
	projectId: 'houseworker-8d25a',
	storageBucket: 'houseworker-8d25a.appspot.com',
	messagingSenderId: '75024616551',
	appId: '1:75024616551:web:b874cf16c60e85178418c2',
	measurementId: 'G-DXHVG0Z1BS',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const fireStorage = getStorage();
