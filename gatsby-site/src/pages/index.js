import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import ImageCarousel from "../components/ImageCarousel"
import CTA from "../components/CTA"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageCarousel />
    <CTA>
      <Link to="/art/">View Our Collection</Link>
    </CTA>
  </Layout>
)

export default IndexPage
