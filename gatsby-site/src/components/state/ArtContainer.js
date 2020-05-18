import { useState } from "react"
import { createContainer } from "unstated-next"

const useArtGlobal = () => {
  const [type, setType] = useState("all")
  const [sortBy, setSortBy] = useState("recentlyAdded")
  const [artist, setArtist] = useState("all")
  const [category, setCategory] = useState("all")
  const [artSearch, setArtSearch] = useState("")
  const [last_id, setLast_id] = useState("5ebc683871f8f2349ae1f87d")

  const [fetchedArt, setFetchedArt] = useState([])
  const [refreshFetchedArt, setRefreshFetchedArt] = useState(0)
  const [showingQuickView, setShowingQuickView] = useState(false)
  const [showToast, setShowToast] = useState(false)



  const handleArtSearch = (value) => {
    setArtSearch(value)
  }
  const handleType = value => {
    //controls state for "type"
    switch (value) {
      case "ALL":
        setType("all")
        break
      case "Canvas Giclee":
        setType("Canvas Giclee")
        break
      case "Gallery Wrap":
        setType("Gallery Wrap")
        break
      case "Paper Giclee":
        setType("Paper Giclee")
        break
    }
  }
  const handleCategory = value => {
    //controls state for "category"
    switch (value) {
      case "all":
        setCategory("all")
        break
      case "landscape":
        setCategory("landscape")
        break
      case "western":
        setCategory("western")
        break
      case "wildlife":
        setCategory("wildlife")
        break
      case "patriotic":
        setCategory("patriotic")
        break
    }
  }
  const handleArtist = value => {
    //controls state for "category"
    switch (value) {
      case "ALL":
        setArtist("all")
        break
      case "Clark Kelley Price":
        setArtist("Clark Kelley Price")
        break
      case "Dallen Lambson":
        setArtist("Dallen Lambson")
        break
      case "Hayden Lambson":
        setArtist("Hayden Lambson")
        break
      case "Manuel Mansanarez":
        setArtist("Manuel Mansanarez")
        break
      case "Mitchell Mansanarez":
        setArtist("Mitchell Mansanarez")
        break
      case "Travis Sylvester":
        setArtist("Travis Sylvester")
        break
    }
  }
  const handleSortBy = value => {
    //controls state for "sort by"
    switch (value) {
      case "Recently Added":
        setSortBy("recentlyAdded")
        break
      case "Artist":
        setSortBy("artist")
        break
    }
  }
  return {
    type,
    category,
    sortBy,
    artist,
    artSearch,
    handleArtSearch,
    handleSortBy,
    handleType,
    handleCategory,
    handleArtist,
    fetchedArt,
    setFetchedArt,
    last_id,
    setLast_id,
    showingQuickView,
    setShowingQuickView,
    showToast,
    setShowToast,
    refreshFetchedArt,
    setRefreshFetchedArt,
  }
}

const ArtContainer = createContainer(useArtGlobal)
export default ArtContainer
