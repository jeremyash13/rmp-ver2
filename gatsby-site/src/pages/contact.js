import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const contactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1>Hi from the Contact Us page</h1>
    <p>Welcome</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default contactPage
