import styled from "styled-components"
function ChatScreen() {
  return (
    <Container>
      <Header>
        <HeaderInfo>
          <h3>Persona..</h3>
          <p>Ultima vez ..</p>
        </HeaderInfo>
      </Header>
      <MessageContainer></MessageContainer>
      <InputContainer></InputContainer>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``

const Header = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 1rem;
  height: 100px;
  align-items: center;
  border-bottom: 2px solid #ccc;
`
const HeaderInfo = styled.div`
  flex: 1;
`
const MessageContainer = styled.div``

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: red;
`
