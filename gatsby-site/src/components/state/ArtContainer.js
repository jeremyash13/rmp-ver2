import { useState } from "react"
import { createContainer } from "unstated-next"

const useArtGlobal = () => {
  const [type, setType] = useState({
    // init state
    all: true,
    giclee: false,
    wrap: false,
    standard: false,
  })
  const [category, setCategory] = useState({
    // init state
    all: true,
    western: false,
    landscape: false,
    patriotic: false,
    wildlife: false,
  })
  const [sortBy, setSortBy] = useState({
    // init state
    recentlyAdded: true,
    az: false,
  })
  const [artist, setArtist] = useState({
    // init state
    all: true,
    clarkKelleyPrice: false,
    dallenLambson: false,
    haydenLambson: false,
    manuelMansanarez: false,
    mitchellMansanarez: false,
    travisSylvester: false,
  })
  const [fetchedArt, setFetchedArt] = useState([])
  const [showingQuickView, setShowingQuickView] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleInput = e => {
    // decides which is the appropriate state to update based off what list item was clicked (event bubbling)
    const name = e.target.htmlFor.toLowerCase()
    if (name.includes("type")) {
      handleType(e)
    } else if (name.includes("category")) {
      handleCategory(e)
    } else if (name.includes("sort-by")) {
      handleSortBy(e)
    }
  }

  const handleType = e => {
    //controls state for "type"
    const name = e.target.htmlFor
    switch (name) {
      case "type-all":
        setType({ all: !type.all })
        break
      case "type-giclee":
        setType({ ...type, giclee: !type.giclee, all: false })
        break
      case "type-wrap":
        setType({ ...type, wrap: !type.wrap, all: false })
        break
      case "type-standard":
        setType({ ...type, standard: !type.standard, all: false })
        break
    }
  }
  const handleCategory = e => {
    //controls state for "category"
    const name = e.target.htmlFor
    switch (name) {
      case "category-all":
        setCategory({ all: !category.all })
        break
      case "category-western":
        setCategory({ ...category, western: !category.western, all: false })
        break
      case "category-landscape":
        setCategory({ ...category, landscape: !category.landscape, all: false })
        break
      case "category-patriotic":
        setCategory({ ...category, patriotic: !category.patriotic, all: false })
        break
      case "category-wildlife":
        setCategory({ ...category, wildlife: !category.wildlife, all: false })
        break
    }
  }
  const handleSortBy = e => {
    //controls state for "sort by"
    const name = e.target.htmlFor
    switch (name) {
      case "sort-by-recently-added":
        setSortBy({ recentlyAdded: true })
        break
      case "sort-by-a-z":
        setSortBy({ az: true })
        break
    }
  }
  return { type, category, sortBy, artist, handleInput, fetchedArt, setFetchedArt, showingQuickView, setShowingQuickView, showToast, setShowToast}
}

const ArtContainer = createContainer(useArtGlobal)
export default ArtContainer
