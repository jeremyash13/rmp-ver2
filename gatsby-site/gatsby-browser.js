import React from "react"
import { navigate } from "gatsby"
import ArtContainer from "./src/components/state/ArtContainer"

import { AuthProvider } from "react-use-auth"
export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-tf5fviek.auth0.com"
    auth0_client_id="wKtM438Kmu3HxkIY0X3LArTOfbLGk0yA"
  >
    <ArtContainer.Provider>{element}</ArtContainer.Provider>
  </AuthProvider>
)
