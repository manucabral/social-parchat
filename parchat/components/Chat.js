import styled from "styled-components"
import { useRouter } from "next/router"
import LoadingContact from "../components/LoadingContact"
import { auth } from "../firebase/index"
import { get_user_by_email } from "../firebase/db"
import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

function Chat({ id, userEmail, contactEmail }) {
  const router = useRouter()
  const [user] = useAuthState(auth)

  const [contact, setContact] = useState()
  useEffect(() => {
    async function getContact() {
      await get_user_by_email(contactEmail, setContact)
    }
    getContact()
  }, [])

  console.log(contact)

  const joinChat = () => {
    router.push(`/chat/${id}`)
  }

  if (contact === undefined) return <LoadingContact />
  return (
    <Container onClick={joinChat}>
      <Avatar alt="avatar" width="40px" src={contact.photo_url} />

      <ContactInfo>
        <p>{contact.displayName}</p>
      </ContactInfo>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: gray;
  }
`

const ContactInfo = styled.div`
  padding: 0.5rem;
`

const Avatar = styled.img`
  align-self: center;
  cursor: pointer;
  border-radius: 50%;
  height: 50%;
  border-color: black;
  -webkit-border-radius: 50%;
`
