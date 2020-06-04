import React, { useEffect, useState } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function useGetTopSellers() {
  const GlobalState = ArtContainer.useContainer()
  const [topSellingArt, setTopSellingArt] = useState([])
  const [topSellingArtLoading, setTopSellingArtLoading] = useState(true)

  useEffect(() => {
    const url = GlobalState.topSellerUrl
    setTopSellingArtLoading(true)

    let cancel
    axios({
      method: "GET",
      url: url,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(json => {
        setTopSellingArt(json.data)
        setTopSellingArtLoading(false)
      })
      .catch(err => {
        if (axios.isCancel(err)) return
        console.log(err)
      })

    return () => cancel()
  }, [])
  return { topSellingArt, topSellingArtLoading }
}
