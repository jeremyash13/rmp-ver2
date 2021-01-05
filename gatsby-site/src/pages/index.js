import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageCarousel from "../components/ImageCarousel"
import CTA from "../components/CTA"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const style = css`
  ${'' /* background-image: var(--bg-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center; */}
  min-height: calc(100vh - 170px);
  @media (max-width: 1488px) {
    background-size: 80vw 100px;
  }

  display: flex;
  flex-direction: column;
`

const IndexPage = () => (
  <Layout>
    <div className="index-page__wrapper" css={style}>
      <SEO title="Home" />
      <ImageCarousel />
      <CTA>
        <Link to="/gallery/">View Our Collection</Link>
      </CTA>
    </div>
  </Layout>
)

export default IndexPage
