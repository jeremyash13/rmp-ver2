import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import ArtContainer from "./state/ArtContainer"
import useSearchArt from "./hooks/useSearchArt"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import QuickView from "./QuickView"
import Loader from "react-loader-spinner"
import { CSSTransition } from "react-transition-group"
import { motion } from "framer-motion/dist/framer-motion"

export default function ArtView() {
  const GlobalState = ArtContainer.useContainer()
  const [idQuickView, setIdQuickView] = useState(null)
  const [ref, inView] = useInView()

  useEffect(() => {
    //clear search on componentDidMount
    // GlobalState.setArtSearch("")
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
    position: relative;
    font-family: "Rosarivo", serif;

    .no-results {
      margin: 0 auto;
      font-size: 2rem;
      color: var(--gold-text-2);
    }
    .art-view-wrapper {
      position: relative;
    }
    .art-entry {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      ${"" /* animation: ${animations.fadeInUp} */}
    }
    .img-hover-element {
      position: absolute;
      z-index: 10;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      &:hover {
        cursor: pointer;
        & .quick-view-button {
          opacity: 1;
        }
      }
    }
    .quick-view-button {
      opacity: 0;
      color: var(--gold-2);
      border: solid 1px var(--gold-2);
      box-shadow: 0 10px 10px -7px rgba(0, 0, 0, 0.8);
      background-color: var(--bg-dark-blue);
      padding: 10px;
      font-weight: 300;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      min-width: 125px;
      text-align: center;
      transition: opacity 0.25s ease-in-out;
    }
    .img-wrapper {
      margin-bottom: 25px;
      margin: auto;
      position: relative;
      max-width: 100%;
      &:hover {
        & .img {
          filter: drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.9)) brightness(1.15)
            opacity(0.7);
        }
      }
    }
    .img {
      transition: filter 250ms ease-out;
      filter: drop-shadow(3px 5px 8px rgba(0, 0, 0, 0.9));
      max-height: 230px;
    }
    .art-view__img-details {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
      margin-top: 25px;
      max-width: 100%;
    }
    .title {
      font-family: Sorts Mill Goudy;
      font-size: 1.5rem;
      color: var(--gold-text);
    }
    .by {
      font-weight: 300;
      color: var(--gold-text-2);
    }
    .artist {
      font-weight: 300;
      color: var(--gold-text-2);
    }

    @media (min-width: 750px) {
    }
    @media (min-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      .img-wrapper {
        display: flex;
        justify-content: center;
        width: max-content;
      }
    }
  `

  const itemAnimationStates = {
    hidden: { opacity: 0, y: 15, scale: 1 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <div css={style} className="art-view-wrapper">
      {GlobalState.showingQuickView && (
        <QuickView show={GlobalState.showingQuickView} />
      )}

      {art.length === 0 && loading === false && (
        <div className="no-results">NO RESULTS...</div>
      )}

      {loading && art.length === 0 && (
        <div className="w-full">
          <div className="mx-auto">
            <Loader
              type="ThreeDots"
              color="var(--gold-text-2)"
              height={20}
              width={20}
            />
          </div>
        </div>
      )}

      {art.map((item, idx) => {
        if (idx === art.length - 1) {
          //attach ref/intersection observer to final item in list
          return (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemAnimationStates}
              key={item._id}
            >
              <div ref={ref} className="art-entry">
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
                  <span className="title truncate">{item.title}</span>
                  <span className="by">by</span>
                  <span className="artist">{item.artist}</span>
                </div>
              </div>
            </motion.div>
          )
        } else {
          return (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemAnimationStates}
              key={item._id}
            >
              <div className="art-entry">
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
                  <span className="title truncate">{item.title}</span>
                  <span className="by">by</span>
                  <span className="artist">{item.artist}</span>
                </div>
              </div>
            </motion.div>
          )
        }
      })}

      {loading && art.length > 1 && (
        <div className="w-full absolute bottom-0 transform translate-y-50px">
          <div className="mx-auto">
            <Loader
              type="ThreeDots"
              color="var(--gold-text-2)"
              height={20}
              width={20}
            />
          </div>
        </div>
      )}
    </div>
  )
}
