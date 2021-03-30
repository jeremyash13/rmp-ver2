import ArtContainer from "./state/ArtContainer"
import QuickViewClose from "./QuickViewClose"
import { CSSTransition } from "react-transition-group"
import { useState, useEffect } from "react"
import animations from "../css/animations.css"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const style = css`
  background-image: var(--bg-soft-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;
  color: var(--gold-text);
  position: relative;

  transform: translate(-50%, -50%);

  & .art-title {
    line-height: 2.5rem;
  }
  & .art-artist {
    color: var(--gold-text-2);
  }
  & .soften-overlay {
    background-color: var(--bg-dark-blue);
    position: absolute;
    opacity: 0.5;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  & .quick-view-image-wrapper {
    margin-right: 1rem;
  }
  .quick-view-close-wrapper {
    top: 15px;
    right: 15px;
  }
  @media (min-width: 768px) {
    & .quick-view-img-wrapper {
      margin-bottom: 0;
    }
  }
`

export default function QuickView() {
  const GlobalState = ArtContainer.useContainer()
  const item = GlobalState.quickViewItem
  const [inProp, setInProp] = useState(false)
  useEffect(() => {
    setInProp(true) // "true" starts entrance animation, "false" starts exit animation
  }, [])

  return (
    <div
      id="outer-overlay"
      className="quick-view-outer fixed inset-0 z-30 bg-black bg-opacity-75"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          setInProp(false)
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <CSSTransition
        in={inProp}
        timeout={300}
        unmountOnExit
        classNames="quick-view"
      >
        <div
          css={style}
          className="quick-view-inner w-full h-full bg-dark-blue top-1/2 left-1/2 flex flex-col justify-between pt-8 pb-8 px-8 md:w-11/12 md:h-11/12 xl:pt-8"
        >
          <div className="soften-overlay"></div>
          <div className="quick-view-details flex flex-col mx-auto my-auto md:flex-row md:flex xl:max-w-screen-xl xxl:w-full">
            <QuickViewClose
              className="quick-view-close-wrapper w-8 absolute right-5 top-5 transform -translate-x-1/2 translate-y-1/2 cursor-pointer"
              clickHandler={() => {
                setInProp(false)
                GlobalState.setShowingQuickView(false)
              }}
            />
            <div className="quick-view-img-wrapper h-auto mx-auto max-w-xs mb-8 md:pr-8 md:max-w-md md:mt-auto xl:max-w-lg xl:mr-12">
              <img
                src={item.src}
                alt={`${item.title}`}
                className="quick-view-img max-h-xs md:max-h-md"
                style={{ filter: "drop-shadow(3px 5px 8px rgba(0,0,0,.9))" }}
              ></img>
            </div>

            <div className="info-wrapper w-full h-max-content max-w-sm m-auto md:w-9/12 xl:w-1/2 xl:ml-0">
              <div className="heading-wrapper flex flex-col text-center mb-6">
                <span className="art-title font-sorts-mill text-4xl tracking-wide leading-8">
                  {item.title}
                </span>
                <span className="art-artist font-light">by</span>
                <span className="art-artist font-light">{item.artist}</span>
              </div>

              <div className="options-wrapper w-full space-y-1">
                {item.options.map(option => (
                  <div
                    className="option flex justify-between"
                    key={option.code}
                  >
                    <span className="option-sku">{option.code}</span>
                    <span className="option-size">{option.size}</span>
                    <span className="option-price">{`$${option.price}`}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="type-age-wrapper w-full mx-auto flex justify-between">
            <div className="type">{item.type}</div>
            <div className="age">{new Date(item.age).toLocaleDateString()}</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}
