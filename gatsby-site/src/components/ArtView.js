import React, { useEffect, useState } from "react"
import nanoid from "nanoid"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import QuickView from "./QuickView"

export default function ArtView() {
  const GlobalState = ArtContainer.useContainer()
  const [idQuickView, setIdQuickView] = useState(null)
  useEffect(() => {
    let query = {
      type: [],
      category: [],
      sortBy: [],
    }
    for (const property in GlobalState.type) {
      if (GlobalState.type[property] === true) {
        query.type = [...query.type, property]
      }
    }
    for (const property in GlobalState.category) {
      if (GlobalState.category[property] === true) {
        query.category = [...query.category, property]
      }
    }
    for (const property in GlobalState.sortBy) {
      if (GlobalState.sortBy[property] === true) {
        query.sortBy = [...query.sortBy, property]
      }
    }
    const fetchArt = new Promise(async (resolve, reject) => {
      try {
        // const url = "https://rmpdemo-backend.herokuapp.com/art"
        const url = "http://localhost:3000/gallery"
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(query),
        })
        resolve(result)
      } catch (err) {
        console.log(err)
      }
    })
      .then(data => data.json())
      .then(json => {
        GlobalState.setFetchedArt(json)
      })
  }, [GlobalState.type, GlobalState.category, GlobalState.sortBy])

  const handleQuickView = e => {
    GlobalState.setShowingQuickView(true)
    setIdQuickView(e.target.id)
  }
  const renderQuickView = i => {
    return <QuickView index={i} />
  }

  const style = css`
    padding: 35px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(100px, 500px));
    grid-gap: 25px;
    .art-view-wrapper {
      position: relative;
    }
    .art-entry {
      display: flex;
      flex-direction: column;
    }
    .img-hover-element {
      position: absolute;
      width: 100%;
      height: 100%;
      transition: background-color 350ms ease-out;
      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.25);
        & .quick-view-button {
          display: block;
        }
      }
    }
    .quick-view-button {
      display: none;
      background-color: white;
      padding: 10px;
      font-weight: 300;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    .img-wrapper {
      margin-bottom: 25px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }
    .img {
      box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.8);
    }
    .title {
      font-family: Sorts Mill Goudy;
      font-size: 1.5rem;
      text-transform: capitalize;
      color: var(--text-dark);
      margin-left: auto;
      margin-right: auto;
    }
    .by {
      color: var(--text-light-gray);
      margin-left: auto;
      margin-right: auto;
    }
    .artist {
      color: var(--text-light-gray);
      margin-left: auto;
      margin-right: auto;
      text-transform: capitalize;
      margin-bottom: 25px;
    }

    @media (min-width: 600px) {
      .img-wrapper {
        max-width: 400px;
      }
    }
  `

  return (
    <div css={style} className="art-view-wrapper">
      {GlobalState.fetchedArt.map(item => {
        const keyId = nanoid()
        return (
          <div key={keyId} className="art-entry">
            <div className="img-wrapper">
              <div
                className="img-hover-element"
                id={GlobalState.fetchedArt.indexOf(item)}
                onClick={e => {
                  handleQuickView(e)
                }}
              >
                <div
                  className="quick-view-button"
                  id={GlobalState.fetchedArt.indexOf(item)}
                  onClick={e => {
                    handleQuickView(e)
                  }}
                >
                  Quick View
                </div>
              </div>
              <img src={item.src} className="img"></img>
            </div>
            <span className="title">{item.title}</span>
            <span className="by">by</span>
            <span className="artist">{item.artist}</span>
          </div>
        )
      })}
      {GlobalState.showingQuickView && renderQuickView(idQuickView)}
    </div>
  )
}
