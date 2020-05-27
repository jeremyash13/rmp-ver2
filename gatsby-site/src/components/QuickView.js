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
      css={style}
      className="quick-view-outer"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <div className="quick-view-inner">
        <div className="quick-view-details">
          <QuickViewClose
            className="quick-view-close-wrapper"
            clickHandler={() => {
              GlobalState.setShowingQuickView(false)
            }}
          />
          <div className="quick-view-img-wrapper">
            <img
              src={item.src}
              alt={`${item.title}`}
              className="quick-view-img"
            ></img>
          </div>

          <div className="info-wrapper">
            <div className="heading-wrapper">
              <span className="title">{item.title}</span>
              <span className="by">by</span>
              <span className="artist">{item.artist}</span>
            </div>

            <div className="options-wrapper">
              {item.options.map(option => (
                <div className="option" key={option.code}>
                  <span className="option-sku">{option.code}</span>
                  <span className="option-size">{option.size}</span>
                  <span className="option-price">{`$${option.price}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="type-age-wrapper">
          <div className="type">{modifiedTypeForDisplay(item)}</div>
          <div className="age">{new Date(item.age).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
