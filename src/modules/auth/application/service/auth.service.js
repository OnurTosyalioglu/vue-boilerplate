import config from "../../../../config/firebase";
import { getApps, initializeApp } from "firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
  confirmPasswordReset,
  sendPasswordResetEmail,
} from "firebase/auth";

const app = initializeApp(config);
const auth = getAuth(app);

class Service {
  constructor(args = {}) {}

  signInWithFacebook() {}
  signInWithGoogle() {}
  createUserWithEmailAndPassword() {}
  signInWithEmailAndPassword() {}
	confirmPasswordReset () {}
	sendPasswordResetEmail() {}
}

const AuthService = new Service();

export { AuthService, auth };
