import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
}

/*
if (!getApps().length) {
}
*/

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const database = getFirestore()
const provider = new GoogleAuthProvider()

export { auth, database, provider }
