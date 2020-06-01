import React, { useState, useEffect } from "react"
import { jsx, css } from "@emotion/core"
import SunriseSerenityWebP from "../images/webp/sunrise-serenity.webp"
import BoardMeetingWebP from "../images/webp/board meeting.webp"
import PlaceOfRestWebP from "../images/webp/place of rest.webp"

import SunriseSerenityJPG from "../images/jpg/sunrise-serenity.jpg"
import BoardMeetingJPG from "../images/jpg/board meeting.jpg"
import PlaceOfRestJPG from "../images/jpg/place of rest.jpg"





/** @jsx jsx */

const style = css`
  display: flex;
  max-height: calc(100vh - 200px);
  position: relative;

  img {
    margin: 0 auto;
    object-fit: cover;
    object-position: 0 65%;
    width: 100%;
  }
  .dark-overlay {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .testimonial-wrapper {
    font-size: 0.9rem;
    line-height: 15px;
    position: absolute;
    padding-left: 25px;
    margin-bottom: 25px;
    transform: translateX(-50%);
    bottom: 0;
    left: 50%;
    color: white;
    font-weight: 300;
    border-left: solid 1px white;
    max-width: 1268px;
    min-width: 380px;
    & .testimonial-footer {
      margin-top: 25px;
    }
  }
  .active {
    background-color: white;
  }
  .inactive {
    background-color: var(--text-light-gray);
  }
  .indicators {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    & div {
      display: inline-block;
      margin-right: 10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }
  .slide-title-text {
    color: var(----text-light-gray);
    font-size: .9rem;
    position: absolute;
    transform: translateX(-50%);
    bottom: -25px;
    left: 50%;
  }
  @media (min-width: 700px) {
    .testimonial-wrapper {
      font-size: 1rem;
      line-height: 25px;
      min-width: 600px;
    }
  }
`

const slideOne = () => {
  return (
    <>
      <div className="dark-overlay"></div>
      <picture>
        <source srcset={SunriseSerenityWebP} type="image/webp" />
        <img src={SunriseSerenityJPG} alt="Sunrise Serenity by Mitchell Mansanarez"></img>
      </picture>
      <div className="testimonial-wrapper">
        <div className="testimonial-body">
          I have had the pleasure of working with Rocky Mountain Publishing for
          the past 7 years. This is a family owned and operated company that
          offers an American made, top quality, market relevant product. The RMP
          team has been a true partner at every level with first class service
          and support, and a work ethic second to none.
        </div>
        <div className="testimonial-footer">
          - Scott Dockstader, Sportsman's Warehouse
        </div>
      </div>
      <div className="indicators">
        <div className="active"></div>
        <div className="inactive"></div>
        <div className="inactive"></div>
      </div>
      {/* <span className="slide-title-text">"Sunrise Serenity" by Mitchell Mansanarez</span> */}
    </>
  )
}
const slideTwo = () => {
  return (
    <>
      <div className="dark-overlay"></div>
      <picture>
        <source srcset={BoardMeetingWebP} type="image/webp" />
        <img src={BoardMeetingJPG} alt="Board Meeting by Mitchell Mansanarez"></img>
      </picture>
      <div className="testimonial-wrapper">
        <div className="testimonial-body">
          We couldn't imagine C-A-L Ranch Stores without Rocky Mountain
          Publishing's artwork. A major part of the unique C-A-L Ranch customer
          experience is having those paintings on the wall. Nothing speaks more
          to our customer than farm and ranch tradition, and local scenery and
          landscape, both of which Rocky Mountain Publishing provides in their
          artwork. Rocky Mountain knows our customers, so they are experts in
          putting together store assortments that are specific to the local
          region.
        </div>
        <div className="testimonial-footer">- C-A-L Ranch Stores</div>
      </div>
      <div className="indicators">
        <div className="inactive"></div>
        <div className="active"></div>
        <div className="inactive"></div>
      </div>
      {/* <span className="slide-title-text">"Board Meeting" by Mitchell Mansanarez</span> */}
    </>
  )
}
const slideThree = () => {
  return (
    <>
      <div className="dark-overlay"></div>
      <picture>
        <source srcset={PlaceOfRestWebP} type="image/webp" />
        <img src={PlaceOfRestJPG} alt="Place of Rest by Dallen Lambson"></img>
      </picture>
      <div className="testimonial-wrapper">
        <div className="testimonial-body">
          Rocky Mountain Publishing has been a great asset to use here at Ashley
          Furniture HomeStore in Idaho Falls. When the trend of gallery wrapped
          art started ramping up we worked closely with Rocky Mountain
          Publishing to have them print us some of their art on canvas. They
          were willing to take the risk by investing in new equipment to print
          on the canvas, and it has been phenomenal for our art sales especially
          the larger 36x72 prints as well as the 29x72's. We highly recommend
          Rocky Mountain Publishing for their excellent quality and service.
        </div>
        <div className="testimonial-footer">
          - Paul Landon, Ashley HomeStore
        </div>
      </div>
      <div className="indicators">
        <div className="inactive"></div>
        <div className="inactive"></div>
        <div className="active"></div>
      </div>
      {/* <span className="slide-title-text">"Place of Rest" by Dallen Lambson</span> */}
    </>
  )
}

const slides = [slideOne(), slideTwo(), slideThree()]

export default function ImageCarousel() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (i === 2) {
        setI(0)
      } else {
        setI(i + 1)
      }
    }, 10000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <div className="image-carousel" css={style}>
      {slides[i]}
    </div>
  )
}
