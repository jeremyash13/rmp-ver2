import React from "react"
import QuickViewClose from "../QuickViewClose"
import TopSellerItem from "../TopSellerItem"
import useGetTopSellers from "../hooks/useGetTopSellers"
import usePostTopSellers from "../hooks/usePostTopSellers"
import ArtSearch from "../ArtSearch"
import ClipLoader from "react-spinners/ClipLoader"
import AllArtItem from "../AllArtItem"

export default function TopSellersView(props) {
  const { topSellingArt, topSellingArtLoading } = useGetTopSellers()
  const { allArt, allArtLoading } = usePostTopSellers()

  return (
    <div className="bg-white w-full h-full p-4 fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-8 ml-auto cursor-pointer">
        <QuickViewClose clickHandler={props.closeHandler} />
      </div>
      <div className="flex">
        <div className="mr-auto">
          <h2 className="text-blackish font-roboto">TOP SELLERS</h2>
          <div className="flex flex-col">
            {topSellingArtLoading ? (
              <div className="">
                <ClipLoader loading={true} />
              </div>
            ) : (
              topSellingArt.map(item => <TopSellerItem item={item} />)
            )}
          </div>
        </div>
        <div className="w-1/3">
          <ArtSearch />
          <div className="flex flex-col overflow-scroll">
            {allArtLoading ? (
              <div className="">
                <ClipLoader loading={true} />
              </div>
            ) : (
              allArt.map(item => <AllArtItem item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
