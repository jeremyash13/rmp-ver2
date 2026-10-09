
import TeriJames from "../../images/artists/TeriJames 285x285.jpg"

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
const TeriJamesPage = () => (
  <Layout>
    <SEO title="Teri James" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={TeriJames} alt="Teri James"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Teri James</strong>
        <br/><br/>
        I'm Teri James, a western photographer based in Morrison, Oklahoma. I photograph Longhorns, horses, Bison, Barns, Windmills, and quiet rural scenes from Oklahoma and the American West. My work is photographed from real places, not staged sets, stock images or AI generated artwork. These are the animals, roads, pastures, and old structures I come across while traveling and exploring back roads. Most of my work focuses on the subjects I'm naturally drawn to. I like simple scenes with strong texture, natural light, and a real western feel.
        <br/><br/>

	      Western and rural subjects have always been familiar to me. My family has raised cattle and wheat in North-Central Oklahoma for 5 generations and I grew up around ranches, pastures, cattle, barns, and windmills. Some of my photographs are made on land that has been in my family for generations. Others come from working ranches and back roads I find while traveling. My background is a big part of why I photograph western subjects and whu I prefer real places and real animals over staged or digitally created scenes. 

        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default TeriJamesPage