import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyCa5x3_NyEs6Q21wJ8GLA_oCGyyhAxaudE",
    authDomain: "netflix-e4769.firebaseapp.com",
    projectId: "netflix-e4769",
    storageBucket: "netflix-e4769.appspot.com",
    messagingSenderId: "554596169357",
    appId: "1:554596169357:web:6958246ce21a6d245a54c4"
};

const app = initializeApp(config);

const db = getFirestore(app);
const auth = getAuth(app);

//seedDatabase(firebase);

export { app, db, auth };