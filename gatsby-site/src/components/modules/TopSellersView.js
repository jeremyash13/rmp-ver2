import React, { useState, useEffect } from "react"
import QuickViewClose from "../QuickViewClose"
import TopSellerItem from "../TopSellerItem"
import ClipLoader from "react-spinners/ClipLoader"
import AllArtItem from "../AllArtItem"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import TopSellersSearch from "../TopSellersSearch"

export default function TopSellersView(props) {
  const [topSellingArt, setTopSellingArt] = useState([])
  const [allArt, setAllArt] = useState([])
  const [allArtLoading, setAllArtLoading] = useState(true)
  const [topSellingArtLoading, setTopSellingArtLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  const GlobalState = ArtContainer.useContainer()

  const fetchTopSellers = () => {
    const url = GlobalState.topSellerUrl
    setTopSellingArtLoading(true)

    axios({
      method: "GET",
      url: url,
    })
      .then(json => {
        setTopSellingArt(json.data)
        setTopSellingArtLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const fetchAllArt = () => {
    const url = GlobalState.allArtUrl
    setAllArtLoading(true)

    axios({
      method: "GET",
      url: url,
    })
      .then(json => {
        setAllArt(json.data)
        setAllArtLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const addTopSeller = addItem => {
    let postData = {
      _id: addItem._id,
    }
    axios({
      url: GlobalState.addTopSellerUrl,
      method: "POST",
      data: postData,
    })
      .then(() => {
        fetchTopSellers()
      })
      .catch(err => {
        console.log(err)
      })
  }
  const removeTopSeller = removeItem => {
    let postData = {
      _id: removeItem._id,
    }
    axios({
      url: GlobalState.removeTopSellerUrl,
      method: "POST",
      data: postData,
    })
      .then(() => {
        fetchTopSellers()
      })
      .catch(err => {
        console.log(err)
      })
  }
  const filterAllArt = () => {
    const search = searchValue

  }

  useEffect(() => {
    fetchAllArt()
    fetchTopSellers()
  }, [])

  return (
    <div className="bg-white w-full h-screen p-4 fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              topSellingArt.map(item => (
                <TopSellerItem
                  removeItemHandler={removeItem => {
                    removeTopSeller(removeItem)
                  }}
                  item={item}
                />
              ))
            )}
          </div>
        </div>
        <div className="h-screen w-1/3">
        <TopSellersSearch value={searchValue} searchHandler={(val) => {setSearchValue(val)}}/>
          <div className="h-full overflow-auto">
            {allArtLoading ? (
              <div className="">
                <ClipLoader loading={true} />
              </div>
            ) : (
              allArt.map(item => (
                <AllArtItem
                  addItemHandler={addItem => {
                    addTopSeller(addItem)
                  }}
                  item={item}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
