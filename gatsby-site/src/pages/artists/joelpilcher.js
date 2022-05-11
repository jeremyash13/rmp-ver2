
import JoelPilcher from "../../images/artists/JoelPilcher 750x750.jpg"

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
const JoelPilcherPage = () => (
  <Layout>
    <SEO title="Joel Pilcher" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={JoelPilcher} alt="Joel Pilcher"></img>
        </div>
        <p>
        From an early age, Joel Pilcher knew he wanted to one day become a professional wildlife artist. Born and raised in the Rocky Mountains, his love for the outdoors fueled his imagination and drove his passion to, someday, create artistic works that celebrate the wild as he saw it. After a successful career as a freelance graphic artist and creative brand and marketing specialist, Joel set out on the artistic adventure he had been dreaming about since he was a kid. His stunning portfolio of artistry celebrates Joel’s careful attention to detail, timeless aesthetics, and mastery of bringing wildlife art to our lives in a unique style unlike any other.
        </p>
      </div>
    </div>
  </Layout>
)

export default JoelPilcherPage