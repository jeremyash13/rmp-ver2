import React from "react"
import Layout from "../layout"
import { ArtManagement } from "./ArtManagement"
import SEO from "../../components/seo"

const Dashboard = () => {
  return (
    <Layout>
      <SEO title="Admin Dashboard" />
      <ArtManagement />
    </Layout>
  )
}

export default Dashboard
