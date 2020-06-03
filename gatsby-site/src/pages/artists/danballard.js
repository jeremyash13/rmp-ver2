/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import DanBallard from "../../images/artists/DanBallard.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArtistBioNav from "../../components/ArtistBioNav"

const style = css`
  padding: 25px;
  min-height: 100vh;
  & p {
    color: var(--text-black);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
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
`
const DanBallardPage = () => (
  <Layout>
    <SEO title="Dan Ballard" />
    <div css={style} className="artist-page-wrapper">
      <ArtistBioNav artist="Dan Ballard" />
      <div className="body-wrapper">
        <div className="img-wrapper mb-10 mr-10 max-w-xs float-left">
          <img src={DanBallard} alt="Dan Ballard"></img>
        </div>
        <h3 className="font-semibold text-2xl leading-tight">
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
