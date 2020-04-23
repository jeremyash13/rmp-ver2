import React, { useState, useEffect } from "react"
import { jsx, css } from "@emotion/core"
import SunriseSerenity from "../images/sunrise-serenity.jpg"
import BoardMeeting from "../images/board meeting.jpg"
import PlaceOfRest from "../images/place of rest.jpg"
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

const style = css`
  display: flex;
  height: 500px;
  position: relative;
  img {
    margin: 0 auto;
    object-fit: cover;
    object-position: 0 65%;
    width: 100%;
  }
  .active {
    background-color: red;
  }
  .inactive {
    background-color: #c4c4c4;
  }
  .indicators {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    & .one {
      display: inline-block;
      margin-right: 10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
    & .two {
      display: inline-block;
      margin-right: 10px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
    & .three {
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }
`

const images = [
  <img src={SunriseSerenity}></img>,
  <img src={BoardMeeting}></img>,
  <img src={PlaceOfRest}></img>,
]

export default function ImageCarousel() {
  const [i, setI] = useState(0)

  const [oneActive, setOneActive] = useState(true)
  const [twoActive, setTwoActive] = useState(false)
  const [threeActive, setThreeActive] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        if (i === 0) {
          setI(i + 1)
          setOneActive(false)
          setTwoActive(true)
          setThreeActive(false)
        }
        if (i === 1) {
          setI(i + 1)
          setOneActive(false)
          setTwoActive(false)
          setThreeActive(true)
        }
        if (i === 2) {
          setI(0)
          setOneActive(true)
          setTwoActive(false)
          setThreeActive(false)
        }
    }, 3000)
  })

  return (
    <div className="image-carousel" css={style}>
      {images[i]}
      <div className="indicators">
        <div className={`one ${oneActive ? "active" : "inactive"}`}></div>
        <div className={`two ${twoActive ? "active" : "inactive"}`}></div>
        <div className={`three ${threeActive ? "active" : "inactive"}`}></div>
      </div>
    </div>
  )
}
