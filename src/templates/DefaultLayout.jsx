import React from "react"
import { Navbar, Footer } from "../components/"
import "../styles/reset.css"
import { SnackbarProvider } from "notistack"

const DefaultLayout = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Navbar />
      {children}
      <Footer />
    </SnackbarProvider>
  )
}

export default DefaultLayout
