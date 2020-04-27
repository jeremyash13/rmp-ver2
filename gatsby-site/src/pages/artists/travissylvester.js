import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import TravisSylvester from "../../images/artists/TravisSylvester.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css``
const TravisSylvesterPage = () => (
  <Layout>
    <SEO title="Travis Sylvester" />
    <div css={style} className="artist-page-wrapper"></div>
  </Layout>
)

export default TravisSylvesterPage
