import React, { useEffect, useState } from "react"

import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import QuickView from "./QuickView"

export default function ArtView() {
  const GlobalState = ArtContainer.useContainer()
  const [idQuickView, setIdQuickView] = useState(null)
  useEffect(() => {
    let query = {
      type: GlobalState.type,
      category: GlobalState.category,
      sortBy: GlobalState.sortBy,
      artist: GlobalState.artist,
      search: GlobalState.artSearch,
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
  }, [
    GlobalState.type,
    GlobalState.category,
    GlobalState.sortBy,
    GlobalState.artist,
    GlobalState.artSearch,
  ])

  // useEffect(() => {
  //   effect
  // }, [GlobalState.artSearch])

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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 25px;
    grid-row-gap: 100px;
    .art-view-wrapper {
      position: relative;
    }
    .art-entry {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .img-hover-element {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
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
      box-shadow: 0 10px 10px -7px rgba(0, 0, 0, 0.8);
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
    .art-view__img-details {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    .title {
      font-family: Sorts Mill Goudy;
      font-size: 1.5rem;
      color: var(--text-dark);
    }
    .by {
      font-weight: 300;
      color: var(--text-light-gray);
    }
    .artist {
      font-weight: 300;
      color: var(--text-light-gray);
    }

    @media (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      .img-wrapper {
        display: flex;
        max-height: 350px;
        justify-content: center;
      }
    }
  `

  return (
    <div css={style} className="art-view-wrapper">
      {GlobalState.fetchedArt.map(item => {
        return (
          <div key={item._id} className="art-entry">
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
            <div className="art-view__img-details">
              <span className="title">{item.title}</span>
              <span className="by">by</span>
              <span className="artist">{item.artist}</span>
            </div>
          </div>
        )
      })}
      {GlobalState.showingQuickView && renderQuickView(idQuickView)}
    </div>
  )
}
