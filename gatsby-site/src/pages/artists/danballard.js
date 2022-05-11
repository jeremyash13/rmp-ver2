/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import DanBallard from "../../images/artists/DanBallard.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css`
  padding: 25px;
  min-height: calc(100vh - 300px);
  margin-top: 75px;
  & p {
    color: var(--gold-text-2);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
  }
  & h3 {
    color: var(--gold-text-2);
    font-family: "Rosarivo", serif;
  }

  ${"" /* & .img-wrapper {
    float: left;
    margin-right: 50px;
    max-width: 400px;
    max-height: 450px;
  } */}
  & img {
    box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.6);
    width: 100%;
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
const DanBallardPage = () => (
  <Layout>
    <SEO title="Dan Ballard" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border mb-10 mr-10 max-w-xs float-left">
          <img src={DanBallard} alt="Dan Ballard"></img>
        </div>
        <h3 className="font-semibold text-2xl">
          Internationally Known Travel and Landscape Photographer
        </h3>
        <p>
          Dan Ballard is a pro landscape photographer, avid traveler and
          educator. He has been to over 60 countries across the globe in search
          of a great image or a memorable experience.
        </p>
        <p>
          Influenced by his early years growing up in a small town in Colorado,
          Dan’s love for photography comes from a strong desire to share a sense
          of wonder for the world with others.
        </p>
        <p>
          Dan has been invited to speak around the world at photo events and
          festivals, and he has sold images to major publications and clients
          globally, including The National Geographic Society and The Travel
          Channel. He teaches photo workshops year round.
        </p>
      </div>
    </div>
  </Layout>
)

export default DanBallardPage
