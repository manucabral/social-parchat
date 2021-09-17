import Chat from "../components/Chat"
import styled from "styled-components"
import { auth } from "../firebase/index"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { add_chat, already_exist_chat, get_chats } from "../firebase/db"
import { useState, useEffect } from "react"

function Sidebar() {
  const router = useRouter()
  const [user] = useAuthState(auth)
  const [chats, setChats] = useState([])

  async function getChats() {
    if (user) await get_chats(user.email, setChats)
    return
  }

  useEffect(() => {
    getChats()
  }, [])

  const createNewChat = async () => {
    const input = prompt(
      "Escribe el correo eléctronico de la persona que quieres agregar"
    )
    if (!input) return null
    if (input !== user.email && (await already_exist_chat(user.email, input))) {
      await add_chat(user, input)
      getChats()
    } else alert("Ya tienes agengado a ese contacto.")
  }

  const signOut = () => {
    auth.signOut()
  }

  const goToHome = () => {
    router.push("/")
  }

  return (
    <Container>
      <Header>
        <Avatar
          onClick={goToHome}
          alt="avatar"
          width="60px"
          src={user.photoURL}
        />
        <Tabs>
          <Button onClick={signOut}>Cerrar sesión</Button>
        </Tabs>
      </Header>
      <Search>
        <Input placeholder="Buscá un chat" />
        <Button onClick={createNewChat}>Comenzar un nuevo chat</Button>
      </Search>

      <Chats>
        {chats?.map((chat, index) => (
          <Chat
            key={index}
            id={chat.id}
            userEmail={user.email}
            contactEmail={chat.contact_email}
          />
        ))}
      </Chats>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  float: left;
`

const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.main.background};
  color: ${({ theme }) => theme.main.primary};
  align-items: center;
  padding: 16px;
  height: 100px;
  top: 0;
  z-index: 1;
`

const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  padding: 1rem;
  border-color: black;
  -webkit-border-radius: 50%;
  :hover {
    opacity: 0.6;
  }
`

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Chats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.main.primary};
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px 16px;
  transition: 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.button.background_secondary};
  }
`

const Search = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Input = styled.input`
  outline-width: 0;
  margin-bottom: 1rem;
  flex: 1;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.main.background};
  outline: 0;
  font-size: 1rem;
`

export default Sidebar
