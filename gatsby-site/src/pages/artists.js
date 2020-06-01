
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

// import MitchellMansanarez from '../images/artists/MitchellMansanarez.jpg'
import DallenLambson from "../images/artists/DallenLambson.jpeg"
import ClarkKelleyPrice from "../images/artists/ClarkKelleyPrice.jpg"
import ManuelMansanarez from "../images/artists/ManuelMansanarez.jpg"
import HaydenLambson from "../images/artists/HaydenLambsonNew.jpg"
import TravisSylvester from "../images/artists/TravisSylvester.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Artist from "../components/Artist"

const style = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  max-width: 1268px;
  margin: 0 auto;
  padding-top: 50px;
`
const ArtistsPage = () => (
  <Layout>
    <SEO title="Artists" />
    <div css={style} className="artists-page-wrapper">
      {/* <Artist
        img={MitchellMansanarez}
        id="mitchellmansanarez"
        name="Mitchell Mansanarez"
        category="Western, Wildlife, Landscape"
      /> */}
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
    </div>
  </Layout>
)

export default ArtistsPage
