import React, { useEffect, useState } from "react"
import axios from "axios"
import ArtContainer from "../components/state/ArtContainer"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Loader from "react-loader-spinner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const style = css`
  padding: 25px;
  max-width: 1268px;
  margin: 0 auto;
  margin-top: 2px;
  font-family: Rosarivo, serif;
  color: var(--gold-text-2);
  position: relative;
  z-index: 20;
  background-image: var(--bg-soft-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;

  & h1 {
    font-family: Sorts Mill Goudy, serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: var(--gold-text);
  }
  & h2 {
    color: var(--gold-text);
    font-family: inherit;
    font-size: 1rem;
    letter-spacing: 0.025rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  & p {
    font-weight: 300;
  }
  & .frame-label {
    max-width: 110px;
    line-height: 1.25rem;
  }
  & .intro-wrapper,
  & .standard-wrapper,
  & .decor-wrapper {
    margin-top: 50px;
  }

  & .intro-wrapper {
    padding: 0 5rem;
    text-align: center;
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
  & .standard-frame-wrapper img,
  & .decor-frame-wrapper img {
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
  }
`

const StandardFrames = () => {
  const GlobalState = ArtContainer.useContainer()
  const url = GlobalState.getFramesUrl
  const [standardFrames, setStandardFrames] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(json => {
      const frames = json.data.filter(item => {
        if (item.line.toLowerCase() === "standard") {
          return item
        }
      })
      setLoading(false)
      setStandardFrames(frames)
    })
  }, [])

  return (
    <div className="standard-frames">
      {loading ? (
        <div className="flex">
          <div className="m-auto">
            <Loader
              type="ThreeDots"
              color="var(--gold-text-2)"
              height={40}
              width={40}
            />
          </div>
        </div>
      ) : (
        standardFrames.map(item => {
          return (
            <div className="standard-frame-wrapper">
              <h2 className="frame-label">{`#${item.title}`}</h2>
              <div className="">
                <img src={item.src} />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
const DecorFrames = () => {
  const GlobalState = ArtContainer.useContainer()
  const url = GlobalState.getFramesUrl
  const [decorFrames, setDecorFrames] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(json => {
      const frames = json.data.filter(item => {
        if (item.line.toLowerCase() === "decor") {
          return item
        }
      })
      setLoading(false)
      setDecorFrames(frames)
    })
  }, [])

  return (
    <div className="decor-frames">
      {loading ? (
        <div className="flex">
          <div className="m-auto">
            <Loader
              type="ThreeDots"
              color="var(--gold-text-2)"
              height={40}
              width={40}
            />
          </div>
        </div>
      ) : (
        decorFrames.map(item => {
          return (
            <div className="decor-frame-wrapper">
              <h2 className="frame-label">{`#${item.title}`}</h2>
              <div className="">
                <img src={item.src} />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}

const FramesPage = () => (
  <Layout>
    <SEO title="Frames" />
    <div css={style} className="frames-page__wrapper">
      <div className="intro-wrapper">
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
          <StandardFrames />
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
          <DecorFrames />
        </div>
      </div>
    </div>
  </Layout>
)

export default FramesPage
