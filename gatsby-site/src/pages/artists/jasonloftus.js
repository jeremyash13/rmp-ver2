import JasonLoftus from "../../images/artists/JasonLoftus 440x440.jpg"

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
const JasonLoftusPage = () => (
  <Layout>
    <SEO title="Jason Loftus" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={JasonLoftus} alt="Jason Loftus"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Jason Loftus</strong>
        <br/><br/>
        Aaron Siskind is credited with saying <i>"Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... It remembers little things, long after you have forgotten everything."</i>
        <br/><br/>

	      I have always had a passion for witnessing, capturing and sharing my outdoor experiences. When I capture a moment it becomes a historical record. A moment that can never be experienced or reproduced again. Wild Moments. Untamed Moments. These are my Untamed Images!
        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default JasonLoftusPage