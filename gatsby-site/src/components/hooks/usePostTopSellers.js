import React, { useEffect, useState } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function usePostTopSellers() {
  const GlobalState = ArtContainer.useContainer()
  const [allArt, setAllArt] = useState([])
  const [allArtLoading, setAllArtLoading] = useState(true)

  useEffect(() => {
    const url = GlobalState.allArtUrl
    setAllArtLoading(true)

    let cancel
    axios({
      method: "GET",
      url: url,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(json => {
        setAllArt(json.data)
        setAllArtLoading(false)
      })
      .catch(err => {
        if (axios.isCancel(err)) return
        console.log(err)
      })

    return () => cancel()
  }, [])
  return { allArt, allArtLoading }
}
