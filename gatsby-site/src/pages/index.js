import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import ImageCarousel from "../components/ImageCarousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageCarousel />
  </Layout>
)

export default IndexPage
