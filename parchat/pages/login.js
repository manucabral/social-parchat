import Head from "next/head"
import styled from "styled-components"
import { signInWithGoogle } from "../firebase/auth"

function Login() {
  const signIn = () => {
    return signInWithGoogle()
  }

  return (
    <Container>
      <Head>
        <title>Inicia sesión en Parchat</title>
      </Head>
      <SubContainer>
        <Logo alt="logo" src="parchat-logo.png" />
        <Button onClick={signIn}>Iniciar sesión con Google </Button>
      </SubContainer>
    </Container>
  )
}

export default Login

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 90vh;
  background-color: ${({ theme }) => theme.background};
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
`

const Button = styled.button`
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  background-color: #ddd;
  transition: 0.3s;
  :hover {
    color: white;
    background-color: #5c009d;
  }
`

const Logo = styled.img`
  width: 50%;
  border-radius: 50%;
  padding: 1rem;
`
