import React, { useEffect } from "react"
import Layout from "../components/layout"
import { useAuth } from "react-use-auth"

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication()
  }, [])

  return (
    <Layout>
      <h1 style={{ fontWeight: "300", fontFamily: "Roboto" }}>
        Redirecting...
      </h1>
    </Layout>
  )
}

export default Auth0CallbackPage
