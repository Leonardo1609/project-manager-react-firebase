// If I import firebase/app that gives me an error
import app from 'firebase';
import 'firebase/firestore';
import 'firebase-auth';
import { FirebaseFirestore } from '@firebase/firestore-types';

const firebaseConfig = {
    apiKey: "AIzaSyA40Fh-YI_Z9ywAtUR19cle7CwsmY_rAdI",
    authDomain: "project-manager-react-19697.firebaseapp.com",
    projectId: "project-manager-react-19697",
    storageBucket: "project-manager-react-19697.appspot.com",
    messagingSenderId: "139434978210",
    appId: "1:139434978210:web:5f1c33a1dc53fb7752e0fb"
};

app.initializeApp( firebaseConfig );
const db: FirebaseFirestore = app.firestore();

export {
    app,
    db
};

