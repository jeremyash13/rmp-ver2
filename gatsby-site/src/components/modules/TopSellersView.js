import React from "react"
import QuickViewClose from "../QuickViewClose"
import TopSellerItem from "../TopSellerItem"
import useSearchTopSellers from "../hooks/useSearchTopSellers"
import ClipLoader from "react-spinners/ClipLoader"

export default function TopSellersView(props) {
  const { wildlifeArt, westernArt, landscapeArt, patrioticArt, loading } = useSearchTopSellers()

  return (
    <div className="bg-white w-full h-full p-4 fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-8 ml-auto cursor-pointer">
        <QuickViewClose clickHandler={props.closeHandler} />
      </div>
      <div>
        <h2 className="text-blackish font-roboto">TOP SELLERS</h2>
        <div className="flex">
          <div>
            <h3>Wildlife</h3>
          </div>
          <div>
            <h3>Western</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <h3>Landscape</h3>
          </div>
          <div>
            <h3>Inspirational/Patriotic</h3>
            {loading ? (
              <ClipLoader loading={true} />
            ) : (
              patrioticArt.map(item => <TopSellerItem item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
