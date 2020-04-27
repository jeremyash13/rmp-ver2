import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

export default function Artist(props) {
  const style = css`
    color: var(--text-black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    a {
      color: var(--text-black);
    }
    .artist-image-wrapper {
      position: relative;
      &:hover {
        cursor: pointer;
      }
      &:hover .artist-hover-element {
        background-color: rgba(255, 255, 255, 0.35);
      }
      &:hover .view-bio-button {
        display: block;
      }
    }
    .view-bio-button {
      display: none;
      position: absolute;
      background-color: white;
      transform: translate(-50%, -50%);
      font-weight: 300;
      top: 50%;
      left: 50%;
      padding: 10px;
      z-index: 15;
    }
    .artist-hover-element {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      transition: background-color 250ms ease-out;
    }
    .artist-footer {
      text-align: center;
      margin: 0 auto;
    }
    .artist-category {
      font-weight: 300;
      font-style: italic;
    }
  `
  return (
    <div css={style} className="artist-wrapper">
      <div className="artist-image-wrapper">
        <Link to={`/artists/${props.id}`}>
          <div className="view-bio-button">View Biography</div>
          <div className="artist-hover-element"></div>
          <img src={props.img} alt={`Photo of ${props.name}`}></img>
        </Link>
      </div>
      <div className="artist-footer">
        <div className="artist-name">{props.name}</div>
        <div className="artist-category">{props.category}</div>
      </div>
    </div>
  )
}
