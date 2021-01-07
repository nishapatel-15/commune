import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
	apiKey: "AIzaSyA8Rjwn693leLE4M2BlSWVBOtwOpy7ynKg",
	authDomain: "chattir.firebaseapp.com",
	databaseURL: "https://chattir-default-rtdb.firebaseio.com",
	projectId: "chattir",
	storageBucket: "chattir.appspot.com",
	messagingSenderId: "51202480430",
	appId: "1:51202480430:web:e9f329e5265ac8aacc42bf",
	measurementId: "G-WFD1T8NEWQ",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
