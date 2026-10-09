
import MickeyShannon from "../../images/artists/MickeyShannon 600x600.jpg"

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
const MickeyShannonPage = () => (
  <Layout>
    <SEO title="Mickey Shannon" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={MickeyShannon} alt="Mickey Shannon"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Mickey Shannon</strong>
        <br/><br/>
        My name is Mickey Shannon and I am a self-taught, professional fine art landscape and nature photographer based in Wichita, Kansas. Over the past 25 years, I have been traveling both near home and far away in pursuit of creating beautiful images. What started as a passionate hobby eventually turned into an internationally recognized print-making practice. With deep family roots spanning the American Great Plains and Rocky Mountain regions, which includes Kansas, Colorado, South Dakota, Oklahoma and more, I have found my work changing quickly in the past decade. What started as just trying to take beautiful scenes of the places I traveled to has evolved into telling stories about the profound connections between land, history and a firsthand experience. This not only includes my love for traveling the American interior, but has consumed photography trips to Canada, Europe, Hawaii and other amazing destinations.
        <br/><br/>
        My surname, Shannon, originates from the Gaelic word seanachaidh, which translates to "skilled storyteller." Long before I ever picked up a professional camera, I was drawn to creative expression, from drawing maps as a kid to studying graphic and web design as I grew older. Eventually, photography gave me the ultimate outlet to tell stories visually. It is no longer just about capturing a pristine landscape, but trying to convey how how it feels to stand there and experience the amazing fleeting moments of golden light or telling the story of the place I'm photographing.
        <br/><br/>
        When a collector views a piece like Solitude Amongst the Beauty, my intent is to evoke the historical emotion of a remote late-1800s Colorado cabin nestled deep in the San Juan Mountains during the gold rush. You can feel the golden transition of autumn while anticipating the isolation of the coming winter snow. Similarly, in Bellagio Bellezza, the imagery invites you to step onto the medieval cobblestone paths leading to Italy's iconic Lake Como, connecting with the countless generations who have walked those same steps over two thousand years.
        <br/><br/>
        While I certainly carry my own narrative into the field, the true magic of fine art landscape photography is that every viewer brings their own history, memories and emotions to the art they view. That timeless, shared connection is the ultimate goal of every photograph I capture.
        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default MickeyShannonPage