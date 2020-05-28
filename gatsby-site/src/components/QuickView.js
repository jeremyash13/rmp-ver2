import ArtContainer from "./state/ArtContainer"
import QuickViewClose from "./QuickViewClose"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function QuickView(props) {
  const GlobalState = ArtContainer.useContainer()
  const item = GlobalState.fetchedArt[props.index]
  
  return (
    <div
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
          <div className="type">{item.type}</div>
          <div className="age">{new Date(item.age).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
