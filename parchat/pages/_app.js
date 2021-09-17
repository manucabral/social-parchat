import { auth, database } from "../firebase"
import { update_user } from "../firebase/db"
import { useAuthState } from "react-firebase-hooks/auth"
import Loading from "../components/Loading"
import Login from "./login"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { useEffect } from "react"

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: auto;
    margin: 0;
    padding: 0;
    font-family: 'News Cycle', sans-serif;
    box-sizing: border-box;
  }
`

const theme = {
  main: {
    primary: "#FFFFFF",
    secondary: "#06070a",
    background: "#5c009d",
  },
  button: {
    background: "#3e0d61",
    background_secondary: "#180029",
    primary: "#FFFFFF",
  },
}

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      update_user(user)
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
