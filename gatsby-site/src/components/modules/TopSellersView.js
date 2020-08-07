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
  const fetchAllArt = searchText => {
    const text = searchText || ""
    const url = GlobalState.allArtUrl
    setAllArtLoading(true)

    axios({
      url: url,
      method: "POST",
      data: {
        text: text,
      },
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

  useEffect(() => {
    fetchAllArt(searchValue)
  }, [searchValue])

  useEffect(() => {
    fetchTopSellers()
  }, [])

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>SKU's</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {topSellingArtLoading ? (
                  <div className="">
                    <ClipLoader loading={true} />
                  </div>
                ) : (
                  topSellingArt.map(item => (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.artist}</td>
                      <td className="flex">
                        {item.options.map(i => (
                          <div
                            className=""
                            key={i.code + i.size + i.price}
                          >
                            <div className="sku-code">{i.code}</div>
                            <div className="size">{i.size}</div>
                            <div className="price">{i.price}</div>
                          </div>
                        ))}
                      </td>
                      <td>{item.type}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="h-screen w-1/3">
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
        </div> */}
      </div>
    </div>
  )
}
