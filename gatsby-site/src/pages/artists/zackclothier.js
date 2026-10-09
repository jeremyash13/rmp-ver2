
import ZackClothier from "../../images/artists/ZackClothier 396x396.jpg"

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
const ZackClothierPage = () => (
  <Layout>
    <SEO title="Zack Clothier" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={ZackClothier} alt="Zack Clothier"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Zack Clothier</strong>
        <br/><br/>
        An avid outdoorsman and self-taught pioneer in landscape and wildlife photography, Zack Clothier has spent more than two decades documenting the natural world. As a Montana photographer, he draws daily inspiration from the vast, untamed landscapes of the American West. Beyond the lens, he is an accomplished naturalist and skilled animal tracker, bringing fieldcraft and deep ecological knowledge to his work.
        <br/><br/>

	      Zack's passion for photography began at a young age as he documented tracks and other signs left behind by the wild animals that roamed the forests near his childhood home. That early fascination with the language of the wild evolved into a lifelong pursuit—and ultimately, a professional career behind the camera.
        <br/><br/>

        His journey has taken him to some of the most spectacular and remote landscapes on Earth. Known for his distinctive vision and refined eye for light and composition, Zack creates imagery that captures the raw, untamed beauty of nature as well as rare, intimate moments in the wild, in a way that is both powerful and deeply evocative. His work transforms fleeting wilderness moments into timeless fine art.
        <br/><br/>

        Zack's award-winning photographs have appeared in the pages of many distinguished publications, including National Geographic, and have been exhibited in galleries and international exhibitions around the world. In 2021, one of his images earned first place in the prestigious Wildlife Photographer of the Year competition.
        <br/><br/>

        When he isn't in the field with a camera, Zack can be found hiking with his wife and their two huskies, tracking wildlife, fly fishing, backpacking, and exploring the rugged Montana wilderness he calls home.
        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default ZackClothierPage