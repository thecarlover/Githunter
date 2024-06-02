import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
 
apiKey: "AIzaSyDDtl5c0vh3CtZWma-WiJVrPfam2tlYC-g",
authDomain: "githunter-27b6b.firebaseapp.com",
databaseURL: "https://githunter-27b6b-default-rtdb.firebaseio.com",
projectId: "githunter-27b6b",
storageBucket: "githunter-27b6b.appspot.com",
messagingSenderId: "219720628773",
appId: "1:219720628773:web:5117c4f92e449d7a5b1dcc",
measurementId: "G-56PR7YH0C9"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);

export default db; // Export the database reference




