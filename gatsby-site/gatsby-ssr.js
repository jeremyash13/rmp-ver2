import React from "react"
import { navigate } from "gatsby"
import ArtContainer from "./src/components/state/ArtContainer"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-7ep5hq36.auth0.com"
    auth0_client_id="z0vRrOO7lgA1qf7XxhlCufSoLmO6hppe"
  >
    <ArtContainer.Provider>{element}</ArtContainer.Provider>
  </AuthProvider>
)

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : "portal-root"}
      id={pluginOptions.id ? pluginOptions.id : "portal-root"}
    >
      {pluginOptions.text}
    </div>,
  ])
}
