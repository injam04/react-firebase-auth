import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBffWKu-gpxTUDVMgupVCJKr4944ryGwMQ',
  authDomain: 'react-auth-4acf0.firebaseapp.com',
  projectId: 'react-auth-4acf0',
  storageBucket: 'react-auth-4acf0.appspot.com',
  messagingSenderId: '25138091692',
  appId: '1:25138091692:web:3d8fca5e4241feb2dc3109',
});

export const auth = app.auth();
export default app;
