/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Player,
  ControlBar,
  BigPlayButton,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  ReplayControl,
} from "video-react"
import CSS from "../components/videoplayer.css"
import { useRef, useEffect } from "react"

const style = css`
  max-width: 1268px;
  margin: 0 auto;
  color: var(--gold-text-2);
  font-weight: 300;
  letter-spacing: 0.075rem;
  line-height: 1.75rem;

  background-image: var(--bg-soft-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;
  @media (max-width: 1488px) {
    background-size: 80vw 100px;
  }

  & h3,
  & h5 {
    color: var(--gold-text);
    font-family: Sorts Mill Goudy, serif;
  }
  & .intro-wrapper {
    padding: 0;
    text-align: center;
  }
  & .font-medium {
    font-weight: 800;
  }

  .molding-video {
    ${"" /* padding-top: 200% !important; */}
  }
  .molding-video-wrapper {
    ${"" /* height: 400px;
    overflow-y: hidden;
    width: 600px; */}
    width: 100%;
  }
  .player-wrapper {
    height: max-content;
  }
  .aspect-ratio {
    padding: 25% 0;
    max-width: 600px;
  }

  .special-border {
    padding: 3px;
    background: linear-gradient(
      165deg,
      rgba(255, 225, 179, 1) 0%,
      rgba(255, 190, 92, 1) 30%,
      rgba(62, 42, 11, 1) 100%
    );
  }

  @media (min-width: 800px) {
    & .intro-wrapper {
      padding: 0 3rem;
    }
  }
`

function BehindScenesVideo() {
  const ref = useRef(null)

  return (
    <div
      className="special-border"
      onClick={() => {
        const isFullscreen = ref.current.getState().player.isFullscreen
        const isPaused = ref.current.getState().player.paused
        if (isPaused && !isFullscreen) {
          ref.current.toggleFullscreen()
        }
      }}
    >
      <Player ref={ref}>
        <source src="https://rmp-images.s3-us-west-2.amazonaws.com/Behind+the+Scenes+Printing+Process.mp4" />
        <BigPlayButton position="center" />
        <ControlBar autoHide={true}></ControlBar>
      </Player>
    </div>
  )
}

const aboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div css={style} className="about-page-wrapper pt-12 pb-32 px-10">
      <div className="intro-wrapper mb-16">
        <p className=" max-w-5xl">
          Rocky Mountain Publishing was founded in 1994 by Mitch Mansanarez.
          Since our beginnings, we have always had one main goal and that is to
          produce gallery quality artwork for production prices. We currently
          publish the works of many outstanding artists. Many of which are
          exclusive to our company such as Clark Kelley Price, Hayden Lambson,
          Dallen Lambson, Manuel Mansanarez, Mitchell Mansanarez, Dan Ballard
          and Travis Sylvester. Due to our nationally renowned team of exclusive
          artists and beautiful framing options, we are one of the strongest
          suppliers of Western, Wildlife and Photography art in the industry.
        </p>
        <p className="mb-16 max-w-5xl">
          There are three main aspects that has allowed RMP to excel in the wall
          decor industry:{" "}
          <strong className="font-medium">
            Quality, Exclusivity, and Value.
          </strong>
        </p>
      </div>
      <section className="">
        <h3>Quality</h3>
        <div className="flex flex-col md:flex-row mb-16">
          <div className="pr-6">
            <p>
              Our gallery level quality all starts with the nationally renowned
              artists that we have the privilege to work with. Many of them have
              been recognized for the their talents by groups such as Mule Deer
              Foundation, Rocky Mountain Elk Foundation, National Geographic,
              and many others. Without their incredible work, nothing else we do
              is possible.
            </p>
            <p>
              All of our manufacturing processes are done in our Idaho Warehouse
              to ensure quality. From printing, to building the frames, to
              assembly etc.. Everything is done in house. That is very important
              for us, so that we can control the quality of every print that is
              shipped out to our customers.
            </p>
            <p>
              We do all of our printing in house on Epson & Canon large format
              Ink-Jet printers. This is a process that it is referred to as
              Giclee printing, the ink is sprayed on and allows us to print
              directly on the canvas. We use an American made canvas for all of
              our Giclees, the same canvas that our artists are producing their
              originals on.
            </p>
          </div>
          {/* <div className="w-56 flex-shrink-0 mx-auto">
            <Player autoPlay={true} muted={true} loop>
              <source src="https://rmp-images.s3-us-west-2.amazonaws.com/Molding+Stain-cropped-720p.m4v" />
              <ControlBar disabled></ControlBar>
            </Player>
          </div> */}
        </div>
      </section>
      {/* <section className="">
        <div className="mb-16 max-w-2xl mx-auto">
          <h5 className="text-center">
            Take a look behind the scenes look at our printing process
          </h5>
          <BehindScenesVideo />
        </div>
      </section> */}
      <section className="pr-6 mb-16">
        <h3>Exclusivity</h3>
        <p>
          We are able to offer product that you won’t be able to get from
          anybody else. We pride ourselves on the exclusivity that we can offer
          all of our customers. The vast majority of product that we publish is
          100% exclusive to RMP.
        </p>
      </section>
      <section className="flex flex-col md:flex-row mb-24">
        <div className="pr-6">
          <h3>Value</h3>
          <p>
            With all that goes into every piece of artwork that we manufacture,
            we have always kept our prices as low as possible and made it easy
            for anybody to be able to hang a gallery quality piece of art on
            their walls for production prices that are some of the best in the
            industry. We know that we have the best quality in the industry, but
            being able to offer that at the prices we do is what we pride
            ourselves on.
          </p>
          <p>
            RMP remains family owned and operated as Cole Mansanarez, Mitch’s
            Son, came into the business in 2017 after obtaining his bachelor’s
            degree from the College of Idaho and going on to achieve his
            Master’s Degree of Accounting from Idaho State University. With our
            wide range of artists we offer our customers extensive choices which
            allow us to meet your individual needs. However, if there is an
            image you like but do not see as you browse this site, please call
            us and we can help.
          </p>
        </div>
        {/* <div className="md:w-64 w-full max-w-2xl flex-shrink-0 mx-auto mt-16">
          <Player autoPlay={true} muted={true} loop>
            <source src="https://rmp-images.s3-us-west-2.amazonaws.com/Printing-360p.m4v" />
            <ControlBar disabled></ControlBar>
          </Player>
        </div> */}
      </section>
      <section className="">
        <div className="mb-16 max-w-2xl mx-auto">
          <h5 className="text-center italic mb-10">
            Take a behind the scenes look at our printing process
          </h5>
          <BehindScenesVideo />
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full max-w-2xl flex-shrink-0 mx-auto mb-16 player-wrapper special-border">
            <Player autoPlay={true} muted={true} loop>
              <source src="https://rmp-images.s3-us-west-2.amazonaws.com/Printing-360p.m4v" />
              <ControlBar disabled></ControlBar>
            </Player>
          </div>
          <div className="!aspect-ratio mx-auto">
            <div className="w-48 flex-shrink-0 player-wrapper special-border !molding-video-wrapper mx-auto">
              <Player
                className="molding-video"
                autoPlay={true}
                muted={true}
                loop
              >
                <source src="https://rmp-images.s3-us-west-2.amazonaws.com/Molding+Stain-cropped-720p.m4v" />
                <ControlBar disabled></ControlBar>
              </Player>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default aboutPage
