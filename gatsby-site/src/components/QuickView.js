import React from "react"
import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import QuickViewClose from "./QuickViewClose"

export default function QuickView(props) {
  const GlobalState = ArtContainer.useContainer()
  const item = GlobalState.fetchedArt[props.index]
  const modifiedTypeForDisplay = item => {
    if (item.type === "giclee" || item.type === "Giclee") {
      return "Giclée"
    } else {
      return item.type
    }
  }
  console.log(item)
  const style = css`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .quick-view-inner {
      position: absolute;
      max-width: 1200px;
      width: 100%;
      height: 70%;
      z-index: 100;
      background-color: white;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: row;
      box-shadow: 0 0 40px 5px rgba(0, 0, 0, .3);
    }
    .quick-view-img-wrapper {
      margin: auto;
    }
    .info-wrapper {
      margin: auto;
    }
    .heading-wrapper {
      display: flex;
      flex-direction: column;
    }
    .options-wrapper {
      display: flex;
      flex-direction: column;
    }
    .quick-view-img {
      box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.8);
    }
    .quick-view-close-wrapper {
      position: absolute;
      width: 25px;
      top: 0;
      right: 10px;
      &:hover {
        cursor: pointer;
      }
      &:hover svg path {
        stroke: var(--text-dark);
      }
    }
  `
  return (
    <div
      css={style}
      className="quick-view-outer"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <div className="quick-view-inner">
        <QuickViewClose className="quick-view-close-wrapper" />
        <div className="quick-view-img-wrapper">
          <img src={item.src} className="quick-view-img"></img>
        </div>

        <div className="info-wrapper">
          <div className="heading-wrapper">
            <span className="title">{item.title}</span>
            <span className="by">by</span>
            <span className="artist">{item.artist}</span>
          </div>

          <div className="options-wrapper">
            {item.options.map(option => (
              <div className="option">
                <span className="option-sku">{option.sku}</span>
                <span className="option-size">{option.size}</span>
                <span className="option-price">{`$${option.price}`}</span>
              </div>
            ))}
          </div>

          <span className="art-view__span--type">
            {modifiedTypeForDisplay(item)}
          </span>

          <span className="art-view__span--age">
            {new Date(item.age).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  )
}
