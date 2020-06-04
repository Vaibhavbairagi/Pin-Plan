import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var config = {
apiKey: "AIzaSyClrzDsbbYWJxjx9BwUWA2_wsFRIsvvQoo",
authDomain: "pinplan-fe0d6.firebaseapp.com",
databaseURL: "https://pinplan-fe0d6.firebaseio.com",
projectId: "pinplan-fe0d6",
storageBucket: "pinplan-fe0d6.appspot.com",
messagingSenderId: "928441741833",
appId: "1:928441741833:web:4f2471ae2c660829e5fed8",
measurementId: "G-XPJPT17HHK"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;