
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import HaydenLambson from "../../images/artists/HaydenLambson.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArtistBioNav from "../../components/ArtistBioNav"

const style = css`
  padding: 25px;

  & p {
    color: var(--text-black);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
  }

  & .img-wrapper {
    float: left;
    margin-right: 50px;
    width: 400px;
    height: 400px;
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
const HaydenLambsonPage = () => (
  <Layout>
    <SEO title="Hayden Lambson" />
    <div css={style} className="artist-page-wrapper">
      <ArtistBioNav artist="Hayden Lambson" />
      <div className="body-wrapper">
        <div className="img-wrapper">
          <img src={HaydenLambson} alt="Hayden Lambson"></img>
        </div>
        <p>
          On August 27, 1948 Hayden was born in the small town of Ramah, New
          Mexico. Not nearly as well known as other great metropolitans, but it
          did have plenty of prairie dogs. There, untainted by museums, studios,
          and pretty much any kind of outside influence, Hayden's creative
          juices were allowed to flow like the flowing flocks of swallows of
          Capistrano.
        </p>
        <p>
          As the youngest, and only brother of two older sisters, Hayden learned
          early on in life to find peace and solitude out in them there hills.
          With so much time spent outdoors, he quickly grew to appreciate the
          wildlife he found all around him, and soon found himself taking many
          long walks in the hills with his .22 or .270. There he could enjoy
          nature the way the Lord intended it: with a little salt and butter,
          evenly roasted over the glowing embers of the campfire (To learn more
          about Hayden's childhood you can either ask him, or easier yet, just
          read any Patrick McManus book).
        </p>
        <p>
          Hayden didn't enjoy only the tastier side of wildlife; he also began
          to express his love for it on paper--with a crayon or two. It didn't
          take long for his talent to be realized by others, and soon Hayden's
          work could to be found all around: on the kitchen refrigerator, his
          bedroom wall, and on many of his homework assignments.
        </p>
        <p>
          In order to gain a greater education than Ramah could offer, Hayden
          went to Brigham Young University, where he cheered for New Mexico at
          all the BYU vs. UNM football games. At BYU, Hayden was finally able to
          take an art class. Okay, to say that a professional artist only took
          one art class in his life seems a bit unbelievable, and you're
          right--that is a blatant exaggeration. He actually took two. He took a
          drawing class and a water color class, but came through both of them
          unscathed. To this day he has never drawn, painted, or envisioned
          another bowl of fruit after his last day of school. His experience at
          school wasn't a complete loss, however. Hayden graduated as
          valedictorian in Youth Leadership in 1970.{" "}
        </p>
        <p>
          Anyway, Hayden pursued his love of the outdoors as a career scouter
          for the Boy Scouts of America for six years. Between scouting,
          hunting, and painting, Hayden found some time to get himself married
          to the most beautiful girl in all of Pocatello (and Chubbuck for that
          matter). But since scouting took too much time out of his painting, he
          decided to turn his full attention to art in 1976 . . . and he became
          very hungry. That was okay though, because he was used to being hungry
          after working for the Boy Scouts of America.
        </p>
        <p>
          Anyway, Hayden pursued his love of the outdoors as a career scouter
          for the Boy Scouts of America for six years. Between scouting,
          hunting, and painting, Hayden found some time to get himself married
          to the most beautiful girl in all of Pocatello (and Chubbuck for that
          matter). But since scouting took too much time out of his painting, he
          decided to turn his full attention to art in 1976 . . . and he became
          very hungry. That was okay though, because he was used to being hungry
          after working for the Boy Scouts of America.
        </p>
        <p>
          For many years Hayden's work could be seen at shows such as FNAWS,
          Safari Club International, Game Coin, The Rocky Mountain Elk
          Foundation, andhayden3.jpg others. He was also a charter member of the
          Wildlife Artists of the World, and served as chairman of the
          selections committee for that organization.
        </p>
        <p>
          Hayden's artwork has been featured in art and outdoor magazines such
          as Art West, Hunters' Quest, Wildlife Art News, Idaho Wildlife,
          Cabela's, New Mexico Wildlife, Alaskan Outdoors, Thrifty Nickel, and
          others. He has also used his work to raise thousands of dollars each
          year for conservation groups.
        </p>
        <p>
          Some projects outside of his normal paintings, sculptures, and prints
          include several conservation and habitat stamp prints for various
          Canadian provinces, a 6-plate Alaskan series for The Bradford
          Exchange, limited edition prints for Cabela's, Bass Pro Shops and the
          NRA, covers and illustrations for Boone & Crockett Records
          publications, and sometimes a volcano or Styrofoam solar system for
          one of his children's science projects.
        </p>
        <p>
          From Hayden's artwork, his enthusiasm for wildlife conservation, and
          the moose ribs on the dinner table, it's easy to see that he has a
          love for the great outdoors--a love that has been shared by his wife
          and eight children.
        </p>
        <p>
          As much as he loves the outdoors, he loves his family more. His
          children will attest to the fact that he is even a better father (and
          grandfather!) than an artist. On Monday evenings his time is spent
          with his wife and family, and youth in his church. Friday nights are
          reserved for him and Cheryl to get away for "date night." Hayden can
          also be found volunteering much of his time to his church and
          community.
        </p>
      </div>
    </div>
  </Layout>
)

export default HaydenLambsonPage
