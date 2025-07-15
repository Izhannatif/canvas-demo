import { createContext, useContext, useState } from "react"

const NavbarContext = createContext()

export const useNavbar = () => useContext(NavbarContext)

export const NavbarProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <NavbarContext.Provider
      value={{
        isNavbarVisible,
        setIsNavbarVisible,
        isNavbarOpen,
        setIsNavbarOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  )
}
