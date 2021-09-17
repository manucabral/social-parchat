import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "./index"

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
}
