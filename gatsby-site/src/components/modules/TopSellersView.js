import React, { useState, useEffect } from "react"
import QuickViewClose from "../QuickViewClose"
import TopSellerItem from "../TopSellerItem"
import ClipLoader from "react-spinners/ClipLoader"
import AllArtItem from "../AllArtItem"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"
import TopSellersSearch from "../TopSellersSearch"
import { AutoSizer, Table, Column } from "react-virtualized"

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
    <div className="min-vh-100 pt-12">
      {topSellingArtLoading ? (
        <div className="w-max-content mx-auto">
          <ClipLoader loading={true} />
        </div>
      ) : (
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={40}
              rowHeight={60}
              rowCount={topSellingArt.length}
              rowGetter={({ index }) => topSellingArt[index]}
            >
              <Column label="Title" dataKey="title" width={300} />
              <Column label="Artist" dataKey="artist" width={300} />
              <Column label="Type" dataKey="type" width={300} />
            </Table>
          )}
        </AutoSizer>
      )}
    </div>
  )
}
