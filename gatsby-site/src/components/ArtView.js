import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import ArtContainer from "./state/ArtContainer"
import useSearchArt from "./hooks/useSearchArt"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import QuickView from "./QuickView"
import ClipLoader from "react-spinners/ClipLoader"

export default function ArtView() {
  const GlobalState = ArtContainer.useContainer()
  const [idQuickView, setIdQuickView] = useState(null)
  const [ref, inView] = useInView()

  useEffect(() => {
    //clear search on componentDidMount
    GlobalState.setArtSearch("")
  }, [])

  useEffect(() => {
    GlobalState.setPageNumber(1)
  }, [
    GlobalState.type,
    GlobalState.category,
    GlobalState.sortBy,
    GlobalState.artist,
    GlobalState.artSearch,
  ])

  useEffect(() => {
    if (inView && hasMore) {
      GlobalState.setPageNumber(prevState => prevState + 1)
    }
  }, [inView])

  const { loading, art, error, hasMore } = useSearchArt()

  const style = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: max-content;
    grid-column-gap: 25px;
    grid-row-gap: 100px;
    min-height: 100vh;

    .no-results {
      margin: 0 auto;
      font-size: 2rem;
    }
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
      z-index: 20;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      &:hover {
        cursor: pointer;
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
      min-width: 107px;
      text-align: center;
    }
    .img-wrapper {
      max-height: 300px;
      margin-bottom: 25px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      &:hover {
        & .img {
          filter: drop-shadow(3px 5px 8px rgba(0,0,0,.9)) brightness(1.15)
            opacity(0.7);
        }
      }
    }
    .img {
      transition: filter 250ms ease-out;
      filter: drop-shadow(3px 5px 8px rgba(0,0,0,.9));
      max-height: 300px;
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      .img-wrapper {
        display: flex;
        max-height: initial;
        justify-content: center;
      }
    }
  `
  const loaderStyle = css`
    margin: 0 auto;
  `
  return (
    <div css={style} className="art-view-wrapper">
      {GlobalState.showingQuickView && <QuickView />}
      {art.length === 0 && loading === false && (
        <div className="no-results">NO RESULTS...</div>
      )}
      {loading && art.length === 0 && (
        <div css={loaderStyle} className="w-full relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <ClipLoader loading={true} />
          </div>
        </div>
      )}
      {art.map((item, idx) => {
        if (idx === art.length - 1) {
          return (
            <div ref={ref} key={item._id} className="art-entry">
              <div className="img-wrapper">
                <div
                  className="img-hover-element"
                  id={art.indexOf(item)}
                  onClick={e => {
                    GlobalState.setQuickViewItem(art[e.target.id])
                    GlobalState.setShowingQuickView(true)
                  }}
                >
                  <div
                    className="quick-view-button"
                    id={art.indexOf(item)}
                    onClick={e => {
                      GlobalState.setQuickViewItem(art[e.target.id])
                      GlobalState.setShowingQuickView(true)
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
        } else {
          return (
            <div key={item._id} className="art-entry">
              <div className="img-wrapper">
                <div
                  className="img-hover-element"
                  id={art.indexOf(item)}
                  onClick={e => {
                    GlobalState.setQuickViewItem(art[e.target.id])
                    GlobalState.setShowingQuickView(true)
                  }}
                >
                  <div
                    className="quick-view-button"
                    id={art.indexOf(item)}
                    onClick={e => {
                      GlobalState.setQuickViewItem(art[e.target.id])
                      GlobalState.setShowingQuickView(true)
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
        }
      })}
      {loading && art.length > 1 && (
        <div css={loaderStyle} className="w-full h-full relative">
          <div className="absolute top-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ClipLoader loading={true} />
          </div>
        </div>
      )}
    </div>
  )
}
