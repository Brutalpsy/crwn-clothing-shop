import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDf6l1xcBCft-fhvIr0y5rD4IAlP5asKM8',
  authDomain: 'crwn-db-101ee.firebaseapp.com',
  databaseURL: 'https://crwn-db-101ee.firebaseio.com',
  projectId: 'crwn-db-101ee',
  storageBucket: 'crwn-db-101ee.appspot.com',
  messagingSenderId: '625258677848',
  appId: '1:625258677848:web:a44c756dc76c777fd42c2d',
  measurementId: 'G-XQS1MRSJNY',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export default firebase;
