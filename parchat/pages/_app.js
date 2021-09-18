import Login from "./login"
import Loading from "../components/Loading"
import { auth } from "../firebase"
import { update_user } from "../firebase/db"
import { useAuthState } from "react-firebase-hooks/auth"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme, GlobalStyles } from "../themes/config"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth)
  const [theme, setTheme] = useState(false)

  const toggleTheme = () => {
    localStorage.setItem("theme", !theme)
    setTheme(!theme)
    return
  }

  const currentTheme = () => {
    return theme ? lightTheme : darkTheme
  }

  useEffect(() => {
    if (user) {
      update_user(user)
    }
  }, [user])

  if (loading) return <Loading />
  if (!user) return <Login />

  return (
    <ThemeProvider theme={currentTheme}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
