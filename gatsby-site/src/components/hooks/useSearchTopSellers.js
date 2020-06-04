import React, { useEffect, useState } from "react"
import axios from "axios"
import ArtContainer from "../state/ArtContainer"

export default function useSearchTopSellers() {
  const GlobalState = ArtContainer.useContainer()
  const [wildlifeArt, setWildlifeArt] = useState([])
  const [westernArt, setWesternArt] = useState([])
  const [landscapeArt, setLandscapeArt] = useState([])
  const [patrioticArt, setPatrioticArt] = useState([])
  const [loading, setLoading] = useState(true)

  const url = GlobalState.topSellerUrl
  
  useEffect(() => {
      setLoading(true)

    let cancel
    axios({
      method: "GET",
      url: url,
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(json => {
        let newWildlifeArt = []
        let newWesternArt = []
        let newLandscapeArt = []
        let newPatrioticArt = []
        json.data.forEach(item => {
          if (item.category === wildlife) {
            newWildlifeArt.push(item)
          }
          if (item.category === western) {
            newWesternArt.push(item)
          }
          if (item.category === landscape) {
            newLandscapeArt.push(item)
          }
          if (item.category === patriotic) {
            newPatrioticArt.push(item)
          }
        })
        setWildlifeArt(newWildlifeArt)
        setWesternArt(newWesternArt)
        setLandscapeArt(newLandscapeArt)
        setPatrioticArt(newPatrioticArt)
        setLoading(false)
      })
      .catch(err => {
        if (axios.isCancel(err)) return
        console.log(err)
      })

    return () => cancel()
  }, [])
  return { wildlifeArt, westernArt, landscapeArt, patrioticArt, loading }
}
