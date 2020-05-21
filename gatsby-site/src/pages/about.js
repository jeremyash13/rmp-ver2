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
      margin-left: 50px;
    }
  }
`

const aboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div css={style} className="about-page-wrapper">
      <div className="img-wrapper">
        <img src={MitchKellyPhoto} alt="Mitch and Kelley Mansanarez"></img>
      </div>
      <p>
        We currently publish the works of many outstanding artists. Many of
        which are exclusive to our company such as Clark Kelley Price, Hayden
        Lambson, Dallen Lambson, Manuel Mansanarez, Mitchell Mansanarez, Dan
        Ballard and Travis Sylvester. Due to our nationally renowned team of
        exclusive artists and beautiful framing options, we are one of the
        strongest suppliers of Western, Wildlife and Photography art in the
        industry.
      </p>
      <p>
        We currently have 3 large format printers that allow us to keep our
        entire production process in house. From printing, to framing, to
        assembly it all happens in our Idaho Warehouse. This allows us to
        control the quality of every print that leaves the door and ensures that
        we can offer gallery quality artwork for production prices.
      </p>
      <p>
        With our wide range of artists and complete selection of art styles, we
        offer our customers extensive choices which allows us to meet your
        individual needs. However, if there is an image you like but do not see
        as you browse this site, please call us and we can help.
      </p>
    </div>
  </Layout>
)

export default aboutPage
