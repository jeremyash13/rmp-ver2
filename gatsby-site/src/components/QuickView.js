import ArtContainer from "./state/ArtContainer"
import QuickViewClose from "./QuickViewClose"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const style = css`
  background-image: var(--bg-soft-gold-texture);
  background-repeat: repeat-y;
  background-size: fit;
  background-position-x: center;
  color: var(--gold-text);

  & .art-artist {
    color: var(--gold-text-2);
  }
`

export default function QuickView(props) {
  const GlobalState = ArtContainer.useContainer()
  const item = GlobalState.quickViewItem

  return (
    <div
      id="outer-overlay"
      className="quick-view-outer fixed inset-0 z-30 bg-black bg-opacity-75"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <div
        css={style}
        className="quick-view-inner absolute w-full h-full bg-dark-blue top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between pt-20 pb-8 px-8 md:w-11/12 md:h-11/12 xl:pt-8"
      >
        <div className="quick-view-details mx-auto md:max-h-xs md:flex md:my-auto xl:my-auto xl:max-w-screen-xl xxl:w-full">
          <QuickViewClose
            className="quick-view-close-wrapper w-6 absolute right-5 top-5 transform -translate-x-1/2 translate-y-1/2 cursor-pointer"
            clickHandler={() => {
              GlobalState.setShowingQuickView(false)
            }}
          />
          <div className="quick-view-img-wrapper mx-auto mb-8 h-auto max-w-xs md:mr-8 md:max-w-md md:mt-auto xl:max-w-lg xl:mr-12">
            <img
              src={item.src}
              alt={`${item.title}`}
              className="quick-view-img mx-auto max-h-xs"
              style={{ filter: "drop-shadow(3px 5px 8px rgba(0,0,0,.9))" }}
            ></img>
          </div>

          <div className="info-wrapper w-full max-w-sm mx-auto md:w-9/12 md:pt-12 xl:w-1/2 xl:ml-0">
            <div className="heading-wrapper flex flex-col text-center mb-6">
              <span className="art-title font-sorts-mill text-4xl tracking-wide leading-8">
                {item.title}
              </span>
              <span className="art-artist font-light">by</span>
              <span className="art-artist font-light">{item.artist}</span>
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
          <div className="type">{item.type}</div>
          <div className="age">{new Date(item.age).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
