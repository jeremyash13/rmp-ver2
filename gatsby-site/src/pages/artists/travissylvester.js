
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import TravisSylvester from "../../images/artists/TravisSylvester.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const style = css`
  padding: 25px;
  margin-top: 75px;
  & p {
    color: var(--gold-text-2);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
  }

  & .img-wrapper {
    float: left;
    margin-right: 25px;
    width: 400px;
    max-height: 450px;
  }
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
const TravisSylvesterPage = () => (
  <Layout>
    <SEO title="Travis Sylvester" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={TravisSylvester} alt="Travis Sylvester"></img>
        </div>
        <p>
          Travis Sylvester is an artist out of the Salt Lake City area. His love
          and appreciation for the amazing colors and markings of trout can be
          seen in his artwork.
        </p>
        <p>
          Colored pencils are his medium of choice, and have been since he was
          in high school. "I really enjoy the results that I get out of colored
          pencils, they allow me to create very vibrant images with hard sharp
          edges, while at the same time I can smoothly transition through all of
          the brilliant colors on a gill plate."
        </p>
        <p>
          Travis's artwork and style has become widely recognizable in the fly
          fishing industry. It is often mistaken for oil or acrylic paintings.
          Although Travis has not attempted using paint of any kind, he does
          state that he can see himself "giving it a whirl" in the future.
        </p>
        <p>
          "My favorite part about drawing trout is trying to capture that
          awesome shimmery wet look. I also like to exaggerate the tones and
          glossy reflections that can often be seen around their eye or down
          their backs. If my completed drawing looks wet, or if it appears that
          you could reach out and touch the fish, I am happy with it."
        </p>
        <p>
          Travis gets inspired to continue his artwork from either catching
          beautiful trout, viewing fantastic trout photography, as well as
          viewing great artwork from other fish and trout artists. He
          continuously strives to make each new piece even better than the
          previous while continuing to establish his own unique style.
        </p>
        <p>
          "For the most part, I am as self-taught with my artwork as I am with
          fly fishing. I still have a ton to learn about fly fishing, I feel
          that trying to figure things out on the water is half the fun.
          Although I do enjoy wading a mountain creek or river, I tend to find
          myself in my float tube out on a small lake or pond when I get a
          chance to go out."
        </p>
        <p>
          Some of Travis's work can be seen on Montana Fly Company's "river
          Camo" product line, Patagonia Tech shirts, and Fincognito Apparel. His
          work has been published in several popular magazines such as; Fly Rod
          & Reel, American Angler, Fly Fusion and H20.
        </p>
      </div>
    </div>
  </Layout>
)

export default TravisSylvesterPage
