import { useState, useEffect } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function useSearchArt() {
  const GlobalState = ArtContainer.useContainer()

  useEffect(() => {
    GlobalState.setLoading(true)
    let url = GlobalState.galleryUrl
    let query = {
      type: GlobalState.type,
      category: GlobalState.category,
      sortBy: GlobalState.sortBy,
      artist: GlobalState.artist,
      search: GlobalState.artSearch,
      pageNumber: GlobalState.pageNumber,
    }

    let cancel;
    axios({
      method: "POST",
      url: url,
      data: query,
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(json => {
      console.log(json)
      if (query.pageNumber > 1) {
        GlobalState.setFetchedArt(prevState => {
          let newState = [...prevState, ...json.data]
          return newState
        })
      } else {
        GlobalState.setFetchedArt(json.data)
      }
      GlobalState.setLoading(false)
    }).catch(err => {
      if (axios.isCancel(err)) return
    })

    return () => cancel()
  }, [
    GlobalState.type,
    GlobalState.category,
    GlobalState.sortBy,
    GlobalState.artist,
    GlobalState.artSearch,
    GlobalState.pageNumber,
  ])
  return null
}
