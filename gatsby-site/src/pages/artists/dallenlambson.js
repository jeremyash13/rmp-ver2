import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import DallenLambson from "../../images/artists/DallenLambson.jpeg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css``
const DallenLambsonPage = () => (
  <Layout>
    <SEO title="Dallen Lambson" />
    <div css={style} className="artist-page-wrapper"></div>
  </Layout>
)

export default DallenLambsonPage
