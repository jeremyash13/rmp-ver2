import React, { useState, useEffect } from "react"
import { jsx, css } from "@emotion/core"
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group"
import animations from "../css/animations.css"

import SunriseSerenityJPG from "../images/jpg/Sunrise Serenity.jpg"
import BoardMeetingJPG from "../images/jpg/Board Meeting.jpg"
import PlaceOfRestJPG from "../images/jpg/Place of Rest.jpg"

/** @jsx jsx */

const style = css`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1rem;

  background-image: var(--bg-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;
  @media (max-width: 1488px) {
    background-size: 80vw 100px;
  }

  .stage {
    position: relative;
    height: calc(100vh - 225px);
  }

  img {
    margin: 0 auto;
    object-fit: cover;
    object-position: 0 65%;
    width: 100%;
    ${"" /* max-height: calc(100vh - 225px); */}
  }
  .carousel-wrapper {
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    box-shadow: 0 5px 40px 6px rgba(0, 0, 0, 0.4),
      0 0 15px 0px rgba(0, 0, 0, 0.4);
  }
  .carousel-content {
    position: relative;
    height: 100%;
  }
  .dark-overlay {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .testimonial-wrapper {
    display: none;
    font-size: 0.9rem;
    font-family: "Rosarivo", serif;
    text-shadow: 0 0 4px black;
    line-height: 20px;
    position: absolute;
    padding-left: 25px;
    margin-bottom: 25px;
    transform: translateX(-50%);
    bottom: 0;
    left: 50%;
    color: var(--gold-2);
    font-weight: 300;
    border-left-width: 2px;
    border-left-style: solid;
    border-image-source: linear-gradient(
      to bottom,
      rgba(255, 190, 92, 1) 0%,
      rgba(82, 57, 19, 1) 100%
    );
    border-image-slice: 1;
    max-width: 1268px;
    min-width: 380px;
    & .testimonial-footer {
      margin-top: 25px;
    }
  }
  .slide-title-text {
    color: var(--bg-dark-blue);
    font-size: 1rem;
    margin: 0 auto;
    font-weight: 500;
    font-family: "Cinzel", serif;
    margin-bottom: 1rem;
    & .slide-artist {
      font-family: "Arapey", serif;
      font-weight: 500;
      font-style: italic;
    }
  }

  @media (min-width: 400px) {
    .testimonial-wrapper {
      display: block;
    }
  }
  @media (min-width: 700px) {
    .testimonial-wrapper {
      font-size: 1rem;
      line-height: 25px;
      min-width: 600px;
    }
  }
  @media (max-width: 1038px) {
    .stage {
      height: calc(100vw * 0.65);
    }
  }
`
const slideData = [
  {
    title: "Board Meeting",
    artist: "Mitchell Mansanarez",
    image: BoardMeetingJPG,
    testimonialBody:
      "We couldn't imagine C-A-L Ranch Stores without Rocky Mountain Publishing's artwork. A major part of the unique C-A-L Ranch customer experience is having those paintings on the wall. Nothing speaks more to our customer than farm and ranch tradition, and local scenery and landscape, both of which Rocky Mountain Publishing provides in their artwork. Rocky Mountain knows our customers, so they are experts in putting together store assortments that are",
    testimonialFooter: "- C-A-L Ranch Stores",
  },
  {
    title: "Place of Rest",
    artist: "Dallen Lambson",
    image: PlaceOfRestJPG,
    testimonialBody:
      "Rocky Mountain Publishing has been a great asset to use here at Ashley Furniture HomeStore in Idaho Falls. When the trend of gallery wrapped art started ramping up we worked closely with Rocky Mountain Publishing to have them print us some of their art on canvas. They were willing to take the risk by investing in new equipment to print on the canvas, and it has been phenomenal for our art sales especially the larger 36x72 prints as well as the 29x72's. We highly recommend Rocky Mountain Publishing for their excellent quality and service.",
    testimonialFooter: "- Paul Landon, Ashley HomeStore",
  },
  {
    title: "Sunrise Serenity",
    artist: "Mitchell Mansanarez",
    image: SunriseSerenityJPG,
    testimonialBody:
      "I have had the pleasure of working with Rocky Mountain Publishing for the past 7 years. This is a family owned and operated company that offers an American made, top quality, market relevant product. The RMP team has been a true partner at every level with first class service and support, and a work ethic second to none.",
    testimonialFooter: "- Scott Dockstader, Sportsman's Warehouse",
  },
]

let slideIndex = 0

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(slideData[0])

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (slideIndex === 2) {
        slideIndex = 0
        setCurrentSlide(slideData[slideIndex])
      } else {
        slideIndex++
        setCurrentSlide(slideData[slideIndex])
      }
    }, 15000) // 15 seconds
    return () => {
      clearInterval(myInterval)
    }
  }, [])

  return (
    <div className="image-carousel" css={style}>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentSlide.title}
          timeout={1500}
          classNames="carousel-info"
        >
          <div className="slide-title-text text-center">
            {currentSlide.title}
            <br />
            <span className="slide-artist">{currentSlide.artist}</span>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <TransitionGroup className="stage">
        <CSSTransition
          key={currentSlide.title}
          timeout={2000}
          classNames="carousel"
        >
          <div className={"carousel-wrapper"}>
            <div className="carousel-content">
              <div className="dark-overlay"></div>
              <img
                src={currentSlide.image}
                alt={`${currentSlide.title} by ${currentSlide.artist}`}
              ></img>
              <div className="testimonial-wrapper">
                <div className="testimonial-body">
                  {currentSlide.testimonialBody}
                </div>
                <div className="testimonial-footer">
                  {currentSlide.testimonialFooter}
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
