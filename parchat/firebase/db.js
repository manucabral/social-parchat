import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore"
import { database } from "./index"

export const update_user = (user) => {
  const user_ref = doc(database, "users", user.uid)
  setDoc(
    user_ref,
    {
      email: user.email,
      photo_url: user.photoURL,
      displayName: user.displayName,
      last_seen: serverTimestamp(),
    },
    { merge: true }
  )
}

export const add_chat = async (user, contact) => {
  return await addDoc(collection(database, "chats"), {
    users: [user.email, contact],
  })
}

const mapChats = (doc) => {
  const data = doc.data()
  const id = doc.id
  return {
    id,
    user_email: data.users[0],
    contact_email: data.users[1],
  }
}

const map_user = (doc) => {
  const data = doc.data()
  return {
    ...data,
  }
}

export const user_chat_ref = (user) => {
  const chatsRef = collection(database, "chats")
  return query(chatsRef, where("users", "array-contains", user.email))
}

export const get_chats = async (user_email, callback) => {
  const chatsRef = collection(database, "chats")
  const querySnapshot = query(
    chatsRef,
    where("users", "array-contains", user_email)
  )
  const snapshot = await getDocs(querySnapshot)
  const chats = snapshot.docs.map(mapChats)
  callback(chats)
}

export const get_user_by_email = async (user_email, callback) => {
  const usersRef = collection(database, "users")
  const querySnapshot = query(usersRef, where("email", "==", user_email))
  const snapshot = await getDocs(querySnapshot)
  const user = snapshot.docs.map(map_user)[0]
  callback(user)
}

export const get_chat_by_id = async (chatId) => {
  const chatsRef = collection(database, "chats")
  const snapshot = await getDocs(chatId)
  //in process
}

export const already_exist_chat = async (user_email, target_email) => {
  const chatsRef = collection(database, "chats")
  const querySnapshot = query(
    chatsRef,
    where("users", "array-contains", user_email)
  )
  const snapshot = await getDocs(querySnapshot)
  const chats = snapshot.docs.map(mapChats)
  const listChats = Object.values(chats)
  const filterChats = listChats.filter(
    (chat) => chat.contact_email === target_email
  )
  return !(filterChats.length > 0 ? true : false)
}
