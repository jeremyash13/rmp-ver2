import ArtContainer from "./state/ArtContainer"
import QuickViewClose from "./QuickViewClose"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

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
      padding-top: 25px;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: white;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      display: flex;
      flex-direction: column;
      box-shadow: 0 35px 40px -25px rgba(0, 0, 0, 0.6);
    }
    .quick-view-details {
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 400px;
    }
    .quick-view-img-wrapper {
      margin: auto;
      margin-bottom: 25px;
      width: auto;
      ${'' /* max-width: 400px; */}
    }
    .info-wrapper {
      margin: auto;
    }
    .heading-wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .title {
      font-size: 1.5rem;
    }
    .by,
    .artist {
      font-size: 0.8rem;
    }
    .options-wrapper {
      display: flex;
      flex-direction: column;
      color: var(--text-dark);
      font-size: 0.8rem;
      width: 100%;
    }
    .option {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      &-sku,
      &-size {
        margin-right: 10px;
      }
    }
    .type-age-wrapper {
      color: var(--text-dark);
      font-size: 0.8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 25px;
      margin-right: 25px;
      margin-bottom: 25px;
    }
    .quick-view-img {
      max-height: 200px;
      box-shadow: 0 40px 20px -30px rgba(0, 0, 0, 0.8);
    }
    .quick-view-close-wrapper {
      position: absolute;
      width: 35px;
      top: 25px;
      right: 25px;
      &:hover {
        cursor: pointer;
      }
      &:hover svg path {
        stroke: var(--text-dark);
      }
    }

    @media (min-width: 700px) {
      .quick-view-inner {
        max-width: 60vw;
        max-height: 70vh;
      }
      .quick-view-close-wrapper {
        width: 25px;
        top: 15px;
        right: 15px;
      }
    }
    @media (min-width: 1000px) {
      .quick-view-img-wrapper {
        margin-right: 25px;
      }
      .quick-view-details {
        flex-direction: row;
        max-height: 80%;
        max-width: 80%;
      }
      .info-wrapper {
        margin: auto;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 200px;
      }
      .quick-view-img {
        max-height: 400px;
      }
    }
  `
  
  return (
    <div
      // css={style}
      className="quick-view-outer fixed inset-0 z-10 bg-black bg-opacity-75"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <div className="quick-view-inner absolute w-full h-full z-20 bg-white top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between pt-12 pb-8 px-8 sm:w-11/12 xl:h-11/12">
        <div className="quick-view-details max-h-xs xl:flex xl:my-auto xl:max-w-screen-xl">
          <QuickViewClose
            className="quick-view-close-wrapper w-6 absolute right-0 top-0 transform -translate-x-1/2 translate-y-1/2"
            clickHandler={() => {
              GlobalState.setShowingQuickView(false)
            }}
          />
          <div className="quick-view-img-wrapper mx-auto mb-8 h-full max-w-xs xl:max-w-lg">
            <img
              src={item.src}
              alt={`${item.title}`}
              className="quick-view-img mx-auto"
            ></img>
          </div>

          <div className="info-wrapper w-full max-w-sm mx-auto xl:w-2/6 xl:pt-12">
            <div className="heading-wrapper flex flex-col text-center mb-6">
              <span className="title">{item.title}</span>
              <span className="by">by</span>
              <span className="artist">{item.artist}</span>
            </div>

            <div className="options-wrapper w-full space-y-1">
              {item.options.map(option => (
                <div className="option flex justify-between" key={option.code}>
                  <span className="option-sku">{option.code}</span>
                  <span className="option-size">{option.size}</span>
                  <span className="option-price">{`$${option.price}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="type-age-wrapper w-full mx-auto flex justify-between">
          <div className="type">{modifiedTypeForDisplay(item)}</div>
          <div className="age">{new Date(item.age).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
