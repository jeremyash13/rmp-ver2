import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Dashboard from "../components/modules/Dashboard"

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Router>
  )
}

export default App
