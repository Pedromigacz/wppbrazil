import React from "react"
import { Navbar } from "../components/"
import "../styles/reset.css"

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
