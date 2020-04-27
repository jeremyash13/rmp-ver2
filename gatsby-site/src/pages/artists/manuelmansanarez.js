import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import ManuelMansanarez from "../../images/artists/ManuelMansanarez.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css``
const ManuelMansanarezPage = () => (
  <Layout>
    <SEO title="Manuel Mansanarez" />
    <div css={style} className="artist-page-wrapper"></div>
  </Layout>
)

export default ManuelMansanarezPage
