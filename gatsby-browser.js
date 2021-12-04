import React from "react"
import DefaultLayout from "./src/templates/DefaultLayout.jsx"
export const wrapRootElement = ({ element }) => (
  <DefaultLayout>{element}</DefaultLayout>
)
