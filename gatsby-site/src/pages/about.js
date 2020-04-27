import React from "react"
import { Link } from "gatsby"
import MitchKellyPhoto from "../images/About2.jpg"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const style = css`
  padding: 25px;
  max-width: 1268px;
  margin: 0 auto;
  color: var(--text-black);
  font-weight: 300;
  letter-spacing: 0.075rem;
  line-height: 1.75rem;
  & img {
    box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 600px) {
    & .img-wrapper {
      float: right;
      margin-right: 50px;
    }
  }
`

const aboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div css={style} className="about-page-wrapper">
      <div className="img-wrapper">
        <img src={MitchKellyPhoto}></img>
      </div>
      <p>
        Rocky Mountain Publishing is located in Blackfoot, Idaho and was started
        by wildlife artist Mitch Mansanarez and his wife, Kelly, in 1994.
      </p>
      <p>
        We publish several outstanding artists. Many of which are exclusive to
        our company such as Clark Kelley Price, Hayden Lambson, Greg Beecham,
        Manuel Mansanarez, Mitchell Mansanarez, and Dan Ballard. With our
        exclusive artists and beautiful mats and frames, we are one of the
        strongest suppliers of Western, Wildlife and Photography art in the
        industry.
      </p>
      <p>
        To compliment our Standard Frame and Mat Line, we have expanded into the
        furniture industry’s home and wall décor therefore adding two new frame
        lines; Décor and Excel. With the higher quality and boldness of these
        product lines, we have established ourselves as a strong competitor in
        the furniture industry. With the addition of our on site Giclee printer
        we are able to offer beautiful, long lasting canvas as well as paper
        images.
      </p>
      <p>
        With our wide range of artists and complete selection of art styles we
        offer our customers extensive choices which allows us to meet your
        individual needs. However, if there is an image you like but do not see
        as you browse this site, please call us and we can help.
      </p>
    </div>
  </Layout>
)

export default aboutPage
