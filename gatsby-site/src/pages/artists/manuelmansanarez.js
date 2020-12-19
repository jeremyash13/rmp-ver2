
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import ManuelMansanarez from "../../images/artists/ManuelMansanarez 200x200.jpg"

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
    max-height: 500px;
  }
  & img {
    box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.6);
    width: 100%;
  }

  & .body-wrapper {
    max-width: 1268px;
    margin: 0 auto;
  }
`
const ManuelMansanarezPage = () => (
  <Layout>
    <SEO title="Manuel Mansanarez" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper">
          <img src={ManuelMansanarez} alt="Manuel Manzanarez"></img>
        </div>
        <p>
          Manuel Mansanarez was born June 4, 1937 in the small mining town of
          Columbia, Utah. He was raised in the west, and became interested in
          art at a young age. He pursued the study of art in high school, and
          then continued to study on his own from then on. His studies continue
          this day, as he values the work of other artists.
        </p>
        <p>
          His paintings reflect that which is closest to his heart, both the
          scenery and the animal life show his enthusiasm for the outdoors and
          the activities that he enjoys personally. From fishing and hiking to
          horseback riding. Manuel spends much of his time enjoying nature.
        </p>
        <p>
          Although he has been an artist most of his life, he didn’t pursue his
          talent full-time until 1980. He quickly developed a reputation
          internationally and is respected for the realism and mood that is
          conveyed in his paintings and make them more than “just a picture”.
        </p>
        <p>
          Manuel and his wife have four sons and a daughter, all of which are
          artistically inclined. He is proud of the fact that he is able to work
          closely with his sons in the art business.
        </p>
      </div>
    </div>
  </Layout>
)

export default ManuelMansanarezPage
