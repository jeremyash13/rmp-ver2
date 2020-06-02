/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Standard Frames
import NineNineOne from "../images/frames/991.png"
import EightTwoThreeThree from "../images/frames/8233.png"
// import FourOneNine from "../images/frames/419-web-600x300px.png"
import SixHundred from "../images/frames/600-web-600x300px.png"
import Barnwood from "../images/frames/GBW.png"
import BrownBarnwood from "../images/frames/BBW.png"
import EightTwoThreeFive from "../images/frames/8235.png"
import OneEighty from "../images/frames/180.png"
import NineHundred from "../images/frames/900.png"
import EightTwoThreeFour from "../images/frames/8234.png"
import NineZeroOne from "../images/frames/901.png"
import SevenHundred from "../images/frames/700.png"
import FourTwoFive from "../images/frames/425.png"

//Decor Frames
// import TenTen from "../images/frames/1010-web-600x300px.png"
import EightTwoZeroSix from "../images/frames/8234.png"
import ThreeZeroTwoFive from "../images/frames/3025-web-600x300px.png"
import EightTwoSevenFour from "../images/frames/8274.png"
import EightTwoZeroFive from "../images/frames/8205-web-600x300px.png"
// import NineEightFour from "../images/frames/984-web-600x300px.png"
import EightTwoZeroSeven from "../images/frames/8207-web-600x300px.png"
// import EightFourZeroSeven from "../images/frames/8407-web-600x300px.png"

const standardFrames = [
  {
    name: "#991",
    element: <img src={NineNineOne} alt=""></img>,
  },
  {
    name: "#8233",
    element: <img src={EightTwoThreeThree} alt=""></img>,
  },
  // {
  //   name: "#419",
  //   element: <img src={FourOneNine} alt=""></img>,
  // },
  {
    name: "#600",
    element: <img src={SixHundred} alt=""></img>,
  },
  {
    name: "#Barnwood",
    element: <img src={Barnwood} alt=""></img>,
  },
  {
    name1: "#Brown",
    name2: "Barnwood",
    element: <img src={BrownBarnwood} alt=""></img>,
  },
  {
    name: "#8235",
    element: <img src={EightTwoThreeFive} alt=""></img>,
  },
  {
    name: "#180",
    element: <img src={OneEighty} alt=""></img>,
  },
  {
    name: "#900",
    element: <img src={NineHundred} alt=""></img>,
  },
  {
    name: "#8234",
    element: <img src={EightTwoThreeFour} alt=""></img>,
  },
  {
    name: "#901",
    element: <img src={NineZeroOne} alt=""></img>,
  },
  {
    name: "#700",
    element: <img src={SevenHundred} alt=""></img>,
  },
  {
    name: "#425",
    element: <img src={FourTwoFive} alt=""></img>,
  },
]
const decorFrames = [
  // {
  //   name: "#1010",
  //   element: <img src={TenTen} alt=""></img>,
  // },
  {
    name: "#8206",
    element: <img src={EightTwoZeroSix} alt=""></img>,
  },
  {
    name: "#3025",
    element: <img src={ThreeZeroTwoFive} alt=""></img>,
  },
  {
    name: "#8274",
    element: <img src={EightTwoSevenFour} alt=""></img>,
  },
  {
    name: "#8205",
    element: <img src={EightTwoZeroFive} alt=""></img>,
  },
  // {
  //   name: "#984",
  //   element: <img src={NineEightFour} alt=""></img>,
  // },
  {
    name: "#8207",
    element: <img src={EightTwoZeroSeven} alt=""></img>,
  },
  // {
  //   name: "#8407",
  //   element: <img src={EightFourZeroSeven} alt=""></img>,
  // }
]

const style = css`
  padding: 25px;
  max-width: 1268px;
  margin: 0 auto;
  font-family: Roboto;
  color: var(--text-black);

  & h1 {
    font-size: 1.2rem;
    font-weight: 400;
  }
  & h2 {
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
  }

  & p {
    font-weight: 300;
  }
  & .intro-wrapper,
  & .standard-wrapper,
  & .decor-wrapper {
    margin-top: 50px;
  }

  & .standard-frames {
    display: grid;
    grid-column-gap: 25px;
    grid-row-gap: 125px;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    margin-top: 25px;
  }
  & .decor-frames {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-column-gap: 25px;
    grid-row-gap: 125px;
    margin-top: 25px;
  }
  @media (min-width: 600px) {
    & .standard-frames {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    & .decor-frames {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    }
  }
  @media (min-width: 900px) {
    & .decor-frames {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }

  & .decor-frame-wrapper img {
    margin: 0 auto;
  }

  & .standard-frame-wrapper,
  & .decor-frame-wrapper {
    position: relative;
  }
  & .standard-frame-wrapper div,
  & .decor-frame-wrapper div {
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
  }
`

const FramesPage = () => (
  <Layout>
    <SEO title="Frames" />
    <div css={style} className="frames-page__wrapper">
      <div className="intro-wrapper">
        <h1>FRAMING</h1>
        <p>
          Rocky Mountain Publishing takes pride in our commitment to quality and
          service. Therefore, offering our customers great pricing for gallery
          quality artwork. Being an artist owned company allows us to offer
          nothing other than the best in quality. Many of our wood molding
          frames are exclusive to our company and have been designed and built
          with the partnership of our supplier.
        </p>
      </div>
      <div className="standard-wrapper">
        <h1>STANDARD LINE</h1>
        <p>
          We offer a variety of Standard frame designs. Our standard line
          consists of frames that have a 2 ½” profile. They range from 100% wood
          moldings to some of the best quality polystyrene moldings on the
          market. Many of these being exclusive to RMP. All frame corners are
          both glued and v-nailed to ensure durability. All artwork comes with
          hanging system installed.
        </p>
        <div className="standard-frames">
          {standardFrames.map(item => {
            if (!(item.name1 === "#Brown")) {
              return (
                <div className="standard-frame-wrapper">
                  <h2>{item.name}</h2>
                  <div>{item.element}</div>
                </div>
              )
            } else {
              return (
                <div className="standard-frame-wrapper">
                  <h2>{item.name1}<br/>{item.name2}</h2>
                  <div>{item.element}</div>
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className="decor-wrapper">
        <h1>DÉCOR LINE</h1>
        <p>
          Our Décor line is designed to provide an elegant art piece that will
          enhance any room. Our Décor line offers many unique ornate frame
          choices. Our décor line consists of the polystyrene moldings that have
          a 4” profile. All frame corners are both glued and v-nailed to ensure
          durability. All artwork comes with hanging system installed.
        </p>
        <div className="decor-frames">
          {decorFrames.map(item => (
            <div className="decor-frame-wrapper">
              <h2>{item.name}</h2>
              <div>{item.element}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default FramesPage
