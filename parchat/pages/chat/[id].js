import Head from "next/head"
import styled from "styled-components"
import ChatScreen from "../../components/ChatScreen"
import Sidebar from "../../components/Sidebar"

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  )
}

export default Chat

/*
export async function getServerSideProps(context){
  return
}
*/

const Container = styled.div`
  display: flex;
`

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
