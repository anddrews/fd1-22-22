import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signOut} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC2X72pO_Nh0u93El8rt9SWf5RbFGGKhxA",
  authDomain: "it-academy-auth.firebaseapp.com",
  projectId: "it-academy-auth",
  storageBucket: "it-academy-auth.appspot.com",
  messagingSenderId: "543578464885",
  appId: "1:543578464885:web:e9005bd63c99a8614c4e3c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const signup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await sendEmailVerification(auth.currentUser)
}

const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
const signout = () => signOut(auth)

const application = async() => {
    await signin('gispapirke@gufum.com', 'test123');

    console.log(auth.currentUser);
}

application();

// signup('gispapirke@gufum.com', 'test123');