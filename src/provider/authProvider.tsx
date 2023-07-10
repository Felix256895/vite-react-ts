import axios from "axios"
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react"

interface Injected {
  token: string | null
  setToken: (value: string) => void
}
const AuthContext = createContext<Injected>({} as Injected)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"))

  const setToken = (token: string) => {
    setToken_(token)
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer${token}`
      localStorage.setItem("token", token)
    } else {
      delete axios.defaults.headers.common["Authorization"]
      localStorage.removeItem("token")
    }
  }, [token])
  console.log(token, "use")
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  )

  return <AuthContext.Provider value={contextValue} children={children} />
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(`useAuth必须在AuthProvider中使用`)
  }
  return context
}
