import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import 'firebase/auth';
import 'firebase/compat/storage'
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyDJ-5n-Hmnk1OcaRszNEo1rKaA8nLhNj3E",
    authDomain: "brandzi-form.firebaseapp.com",
    projectId: "brandzi-form",
    storageBucket: "brandzi-form.appspot.com",
    messagingSenderId: "584024213601",
    appId: "1:584024213601:web:b25f897e88360f88384220"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const app = firebase.app()
export const db = getFirestore(app);
// export const db = firebase.db()
export const auth = getAuth(app)
export const storage = firebase.storage()

export default firebase