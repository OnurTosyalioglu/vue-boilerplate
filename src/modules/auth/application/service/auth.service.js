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

  signInWithFacebook() {
    return new Promise((resolve, reject) => {
      try {
        signInWithPopup(new FacebookAuthProvider())
          .then(user => resolve(user))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  signInWithGoogle() {
    return new Promise((resolve, reject) => {
      try {
        signInWithPopup(new GoogleAuthProvider())
          .then(user => resolve(user))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  createUserWithEmailAndPassword({ email, password }) {
    return new Promise((resolve, reject) => {
      try {
				createUserWithEmailAndPassword(
					email, 
					password
				)
          .then(user => resolve(user))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  signInWithEmailAndPassword({ email, password }) {
    return new Promise((resolve, reject) => {
      try {
				signInWithEmailAndPassword(
					email, 
					password
				)
          .then(user => resolve(user))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  confirmPasswordReset({ oobCode, password }) {
    return new Promise((resolve, reject) => {
      try {
				confirmPasswordReset(
					oobCode, 
					password
				)
          .then(res => resolve(res))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  sendPasswordResetEmail({ email }) {
    return new Promise((resolve, reject) => {
      try {
        sendPasswordResetEmail(email)
          .then(res => resolve(res))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }

  signOut() {
    return new Promise((resolve, reject) => {
      try {
        signOut()
          .then(res => resolve(res))
          .catch(err => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  }
}

const AuthService = new Service();

export { AuthService, auth };
