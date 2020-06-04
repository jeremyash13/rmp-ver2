import { useState, useEffect } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function useSearchArt(limitResults) {

  const GlobalState = ArtContainer.useContainer()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [art, setArt] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let url = GlobalState.galleryUrl
    let query = {
      type: GlobalState.type,
      category: GlobalState.category,
      sortBy: GlobalState.sortBy,
      artist: GlobalState.artist,
      search: GlobalState.artSearch,
      pageNumber: GlobalState.pageNumber,
      limitResults: limitResults || 25,
    }

    let cancel
    axios({
      method: "POST",
      url: url,
      data: query,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(json => {
        if (GlobalState.pageNumber > 1) {
          setArt(prevState => [...prevState, ...json.data])
        } else {
          setArt(json.data)
        }
        setHasMore(json.data.length > 0)
        setLoading(false)
      })
      .catch(err => {
        if (axios.isCancel(err)) return
        console.log(err)
        setError(true)
      })

    return () => cancel()
  }, [
    GlobalState.type,
    GlobalState.category,
    GlobalState.sortBy,
    GlobalState.artist,
    GlobalState.artSearch,
    GlobalState.pageNumber,
    GlobalState.refreshArt,
  ])
  return {
    loading,
    art,
    error,
    hasMore,
  }
}
