import React from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

export default function Artist(props) {
  const style = css`
    color: var(--gold-text-2);
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
      margin: 0 auto;
      &:hover {
        cursor: pointer;
      }
      &:hover .artist-hover-element {
        background-color: var(--bg-dark-blue);
        opacity: 0.35;
      }
      &:hover .view-bio-button {
        display: block;
      }
    }
    .view-bio-button {
      display: none;
      position: absolute;
      color: var(--gold-2);
      background-color: var(--bg-dark-blue);
      transform: translate(-50%, -50%);
      font-weight: 300;
      min-width: 142px;
      top: 50%;
      left: 50%;
      padding: 10px;
      z-index: 11;
      text-align: center;
      border: solid 1px var(--gold-2);
      font-family: "Rosarivo", serif;
    }
    .artist-hover-element {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 10;
      transition: background-color 250ms ease-out, opacity 250ms ease-out;
    }
    .artist-image-border {
      margin-bottom: 2rem;
      padding: 5px;
      background: linear-gradient(
        165deg,
        rgba(255, 225, 179, 1) 0%,
        rgba(255, 190, 92, 1) 30%,
        rgba(62, 42, 11, 1) 100%
      );
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
      <div className="artist-image-border">
        <div className="artist-image-wrapper">
          <Link to={`/artists/${props.id}`}>
            <div className="view-bio-button shadow-lg">View Biography</div>
            <div className="artist-hover-element"></div>
            <img src={props.img} alt={`${props.name}`} className=""></img>
          </Link>
        </div>
      </div>
      <div className="artist-footer">
        <div className="artist-name">{props.name}</div>
        <div className="artist-category">{props.category}</div>
      </div>
    </div>
  )
}
