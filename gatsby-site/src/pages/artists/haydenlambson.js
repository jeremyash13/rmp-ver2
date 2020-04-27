import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import HaydenLambson from "../../images/artists/HaydenLambson.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css``
const HaydenLambsonPage = () => (
  <Layout>
    <SEO title="Hayden Lambson" />
    <div css={style} className="artist-page-wrapper"></div>
  </Layout>
)

export default HaydenLambsonPage
