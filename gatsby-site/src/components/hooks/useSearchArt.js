import { useState, useEffect } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function useSearchArt(pageNumber) {
  const GlobalState = ArtContainer.useContainer()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [art, setArt] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [previousLength, setPreviousLength] = useState()

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
      pageNumber: pageNumber,
    }

    let cancel
    axios({
      method: "POST",
      url: url,
      data: query,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(json => {
        let finalResults = [...new Set([...art, ...json.data])]
        if (pageNumber > 1) {
          setArt(prevState => {
            let uniqueData = [...new Set([...prevState, ...json.data])]
            return uniqueData
          })
        } else {
          setArt(json.data)
        }
        setHasMore(!(previousLength === finalResults.length))
        setPreviousLength(finalResults.length)
        setLoading(false)
      })
      .catch(err => {
        if (axios.isCancel(err)) return
        setError(true)
      })

    return () => cancel()
  }, [
    GlobalState.type,
    GlobalState.category,
    GlobalState.sortBy,
    GlobalState.artist,
    GlobalState.artSearch,
    pageNumber,
  ])
  return {
    loading,
    art,
    error,
    hasMore,
  }
}
