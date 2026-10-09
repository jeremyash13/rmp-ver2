
import SummerJackman from "../../images/artists/SummerJackman 750x750.jpg"

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
const SummerJackmanPage = () => (
  <Layout>
    <SEO title="Summer Jackman" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={SummerJackman} alt="Summer Jackman"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Summer Jackman</strong>
        <br/><br/>

        Summer Jackman is a wildlife and landscape photographer from Blackfoot, Idaho. Born and raised in the high mountain desert, she has always had a love of the outdoors and an appreciation of the rugged vistas and abundant wildlife in the place she calls home.
        <br/>
        <br/>
        Summer is a graduate of Idaho State University, where she earned her bachelor's and master's degrees in Education and English Literature. She is a business owner and active member of Rotary International, having served as President of the Pocatello Rotary Club in 2020-2021. She commits her time to local community involvement and has also organized international projects to support education and basic health.
        <br/>
        <br/>
        Summer is a wife and mother of three.
        She enjoys supporting her kids in their athletic interests and enjoys time with her family when they can get away to their favorite spot in Island Park, ID.
        Summer is an avid reader, and amateur angler, and is always up for getting outside to see and explore something new.
        From the high peaks of Wyoming and Montana to the Snake River plain of Idaho and deserts of Utah, Summer is happiest with a camera in hand and a new subject to capture through her lens. She believes that the more we experience nature, the more willing we are to protect and preserve the spaces and the animals that bring us joy. She attempts to capture this love and appreciation in her work , and she shares it with others in hopes that the beauty we enjoy today is preserved for generations to come. 
        </p>
      </div>
    </div>
  </Layout>
)

export default SummerJackmanPage