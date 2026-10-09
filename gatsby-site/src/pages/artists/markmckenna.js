
import MarkMckenna from "../../images/artists/MarkMckenna 620x620.jpg"

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
const MarkMckennaPage = () => (
  <Layout>
    <SEO title="Mark Mckenna" />
    <div css={style} className="artist-page-wrapper">
      <div className="body-wrapper">
        <div className="img-wrapper artist-image-border">
          <img src={MarkMckenna} alt="Mark Mckenna"></img>
        </div>
        <p>
        <strong style={{fontSize: '1.5rem'}}>Mark Mckenna</strong>
        <br/><br/>

        Mark was born in Logan, UT in 1984 and has lived in the West most of his life. His work is inspired by what he loves, the beauty of the West. He grew up hunting, fishing, hiking, backpacking, and site seeing, and has personally experienced much of what the West has to offer.
        <br/><br/>
        Art has been apart of Mark's life from very early on, but he started to show real promise as early as 9th grade when he began receiving commissions for his pencil portraits. After high school, he studied art at Brigham Young University - Idaho, where he earned a Bachelor of Fine Art in Illustration as well as a Bachelor of Science in Art Education. Mark pursued illustration for a few years and worked with several publishing houses across the US.
        <br/><br/>
        Mark taught art at the high school level from 2010 to 2018, and has transitioned out of teaching to be a full-time artist. -- Mark has been fortunate to study under and be personally tutored by some great artists including: Dan Burr, Leon Parson, Gerald Griffin, Jim Wilcox, Grant Redden, and Greg Beecham. -- Subsequently, he has spent thousands of hours at the easel practicing and implementing the techniques and skills gained throughout his education. -- Mark has had his work included in shows across the U.S. & Canada and is currently represented by Astoria Fine Art in Jackson, WY, and Mountain Trails Fine Art in Santa Fe, NM.
        <br/><br/>
        <br/><br/>
        <strong style={{fontSize: '2rem'}}>Artist Statement</strong>
        
        <br/><br/>
        The greatest goal with my art is to inspire goodness and beauty in the lives of my audience. The focus of my work is to represent, in my own way, the natural world, that which I believe is directly connected with the Source of all true beauty.
        <br/><br/>
        I love bold and deliberate brushstrokes, and I am fascinated by the happenstance miracles that can occur with a palette knife. As I am evolving as an artist, I'm continuously moving away from photo-realism and minuscule detail, into allowing the paint to speak for itself, enabling it to be what it is. I don't need to paint every hair, blade of grass, or leaf; each element is only suggested by textural shapes of color and value rather than being clearly defined and photographically reproduced. As I work, I am tireless to ensure that my paintings feel fresh and not over-worked. As I paint more and more animals, this becomes particularly challenging because I have to be true to the anatomy and form of the subject. So, every mark is calculated and carefully placed; just enough to communicate what is necessary.
        <br/><br/>
        I honestly believe that there are several lifetimes of learning to be had within the versatilities of oil paint and the exploration of color. I'm thrilled that I may have several decades ahead of me to be taught by this incredible medium.
        <br/><br/>
        </p>
      </div>
    </div>
  </Layout>
)

export default MarkMckennaPage