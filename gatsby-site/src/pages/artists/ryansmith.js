
import RyanSmith from "../../images/artists/RyanSmith 600x600.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const style = css`
  padding: 25px;
  margin-top: 75px;
  min-height: calc(100vh - 300px);
  & p {
    color: var(--gold-text-2);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
  }

  & .img-wrapper {
    float: left;
    margin-right: 25px;
    max-width: 400px;
    height: 300px;
  }
  & img {
    box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.6);
    height: 100%;
  }

  & .body-wrapper {
    max-width: 1268px;
    margin: 0 auto;
  }

  .artist-image-border {
      margin-bottom: 2rem;
      padding: 5px;
      box-shadow: 0 13px 30px -10px rgba(0, 0, 0, 1);
      background: linear-gradient(
        165deg,
        rgba(255, 225, 179, 1) 0%,
        rgba(255, 190, 92, 1) 30%,
        rgba(62, 42, 11, 1) 100%
      );
    }
`
const RyanSmithPage = () => (
  <Layout>
    <SEO title="Ryan Smith" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={RyanSmith} alt="Ryan Smith"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Ryan Smith</strong>
        <br/><br/>
        Ryan Smith is an award-winning gallery artist and passionate landscape photographer whose work captures the awe-inspiring beauty of nature through striking compositions and impeccable detail. Growing up amidst the diverse landscapes of Utah, Ryan developed a love for the outdoors early on, which evolved into a lifelong obsession with capturing the world’s most breathtaking views. His unique artistic style has garnered prestigious awards and is featured in high-end galleries across the West, including Jackson Hole, Wyoming; Park City, Utah; Telluride, Colorado; Aspen, Colorado; and Sedona, Arizona.
        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default RyanSmithPage