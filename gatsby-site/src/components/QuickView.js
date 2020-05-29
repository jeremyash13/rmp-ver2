import ArtContainer from "./state/ArtContainer"
import QuickViewClose from "./QuickViewClose"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function QuickView(props) {
  const GlobalState = ArtContainer.useContainer()
  // const item = props.index
  const item = GlobalState.quickViewItem
  
  return (
    <div
      className="quick-view-outer fixed inset-0 z-10 bg-black bg-opacity-75"
      onClick={e => {
        if (e.target.classList.contains("quick-view-outer")) {
          GlobalState.setShowingQuickView(false)
        }
      }}
    >
      <div className="quick-view-inner absolute w-full h-full z-30 bg-white top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between pt-20 pb-8 px-8 md:w-11/12 md:h-11/12 xl:pt-8">
        <div className="quick-view-details mx-auto md:max-h-xs md:flex md:my-auto xl:my-auto xl:max-w-screen-xl xxl:w-full">
          <QuickViewClose
            className="quick-view-close-wrapper w-6 absolute right-0 top-0 transform -translate-x-1/2 translate-y-1/2 cursor-pointer"
            clickHandler={() => {
              GlobalState.setShowingQuickView(false)
            }}
          />
          <div className="quick-view-img-wrapper mx-auto mb-8 h-auto max-w-xs md:mr-8 md:max-w-md md:mt-auto xl:max-w-lg xl:mr-12">
            <img
              src={item.src}
              alt={`${item.title}`}
              className="quick-view-img mx-auto max-h-xs"
              style={{filter: 'drop-shadow(1px 5px 5px #000000c7)'}}
            ></img>
          </div>

          <div className="info-wrapper w-full max-w-sm mx-auto md:w-9/12 md:pt-12 xl:w-1/2 xl:ml-0">
            <div className="heading-wrapper flex flex-col text-center mb-6">
              <span className="font-sorts-mill text-4xl text-blackish tracking-wide leading-8">{item.title}</span>
              <span className="text-light-gray font-light">by</span>
              <span className="text-light-gray font-light">{item.artist}</span>
            </div>

            <div className="options-wrapper w-full space-y-1 text-blackish">
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
