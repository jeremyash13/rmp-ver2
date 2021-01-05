
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

// import MitchellMansanarez from '../images/artists/MitchellMansanarez.jpg'
import DallenLambson from "../images/artists/DallenLambson 750x750.jpg"
import ClarkKelleyPrice from "../images/artists/ClarkKelleyPrice 190x190.jpg"
import ManuelMansanarez from "../images/artists/ManuelMansanarez 200x200.jpg"
import HaydenLambson from "../images/artists/HaydenLambson 640x640.jpg"
import TravisSylvester from "../images/artists/TravisSylvester 190x190.jpg"
import DanBallard from "../images/artists/DanBallard 270x270.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Artist from "../components/Artist"

const style = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-row-gap: 75px;
  grid-column-gap: 25px;
  padding: 25px;
  max-width: 1268px;
  margin: 0 auto;
  padding-bottom: 8rem;
  padding-top: 6rem;
  position: relative;
  z-index: 20;
  
  background-image: var(--bg-soft-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;
  @media (max-width: 1488px) {
      background-size: 80vw 100px;
    }

`
const ArtistsPage = () => (
  <Layout>
    <SEO title="Artists" />
    <div css={style} className="artists-page-wrapper">
      <Artist
        img={DallenLambson}
        id="dallenlambson"
        name="Dallen Lambson"
        category="Wildlife"
      />
      <Artist
        img={ClarkKelleyPrice}
        id="clarkkelleyprice"
        name="Clark Kelley Price"
        category="Western"
      />
      <Artist
        img={ManuelMansanarez}
        id="manuelmansanarez"
        name="Manuel Mansanarez"
        category="Wildlife"
      />
      <Artist
        img={HaydenLambson}
        id="haydenlambson"
        name="Hayden Lambson"
        category="Wildlife"
      />
      <Artist
        img={TravisSylvester}
        id="travissylvester"
        name="Travis Sylvester"
        category="Wildlife"
      />
      <Artist
        img={DanBallard}
        id="danballard"
        name="Dan Ballard"
        category="Landscape Photography"
      />
      {/* <Artist
        img={MitchellMansanarez}
        id="mitchellmansanarez"
        name="Mitchell Mansanarez"
        category="Western, Wildlife, Landscape Photography"
      /> */}
    </div>
  </Layout>
)

export default ArtistsPage
