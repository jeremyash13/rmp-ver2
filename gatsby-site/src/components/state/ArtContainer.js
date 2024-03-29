import { useState } from "react"
import { createContainer } from "unstated-next"

const useArtGlobal = () => {
  const [type, setType] = useState("all")
  const [sortBy, setSortBy] = useState("recentlyAdded")
  const [artist, setArtist] = useState("all")
  const [category, setCategory] = useState("all")
  const [artSearch, setArtSearch] = useState("")
  const [pageNumber, setPageNumber] = useState(0)
  const [loading, setLoading] = useState(true)

  const [quickViewItem, setQuickViewItem] = useState({
    src: "",
    title: "",
    artist: "",
    type: "",
    // age:
    options: [
      {
        code: "",
        size: "",
        price: "",
      },
    ],
  })

  const [fetchedArt, setFetchedArt] = useState([
    {
      _id: "",
      type: "",
      title: "",
      artist: "",
      src: "",
      options: [{ code: "", size: "", price: "" }],
      tags: [""],
      age: "",
    },
  ])
  const [refreshArt, setRefreshArt] = useState(0)
  const [showingQuickView, setShowingQuickView] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // const [deleteUrl] = useState("http://localhost:3000/delete")
  // const [galleryUrl] = useState("http://localhost:3000/gallery")
  // const [editUrl] = useState("http://localhost:3000/edit")
  // const [s3Url] = useState("http://localhost:3000/s3")
  // const [topSellerUrl] = useState("http://localhost:3000/topsellers")
  // const [autoCompleteUrl] = useState("http://localhost:3000/autocomplete")
  // const [removeTopSellerUrl] = useState("http://localhost:3000/removetopseller")
  // const [addTopSellerUrl] = useState("http://localhost:3000/addtopseller")
  // const [getFramesUrl] = useState("http://localhost:3000/frames")
  // const [deleteFramesUrl] = useState("http://localhost:3000/deleteframe")

  const [deleteUrl] = useState("https://api.rockymountainpublishing.net/delete")
  const [galleryUrl] = useState("https://api.rockymountainpublishing.net/gallery")
  const [editUrl] = useState("https://api.rockymountainpublishing.net/edit")
  const [s3Url] = useState("https://api.rockymountainpublishing.net/s3")
  const [topSellerUrl] = useState("https://api.rockymountainpublishing.net/topsellers")
  const [autoCompleteUrl] = useState(
    "https://api.rockymountainpublishing.net/autocomplete"
  )
  const [removeTopSellerUrl] = useState(
    "https://api.rockymountainpublishing.net/removetopseller"
  )
  const [addTopSellerUrl] = useState(
    "https://api.rockymountainpublishing.net/addtopseller"
  )
  const [getFramesUrl] = useState("https://api.rockymountainpublishing.net/frames")
  const [deleteFramesUrl] = useState(
    "https://api.rockymountainpublishing.net/deleteframe"
  )

  const resetArtFilteringToDefault = () => {
    setArtist("all")
    setCategory("all")
    setType("all")
    setArtSearch("")
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
      case "topSellers":
        setCategory("topSellers")
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
      case "Joel Pilcher":
        setArtist("Joel Pilcher")
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
      case "Top Sellers":
        setSortBy("topSellers")
        break
    }
  }
  return {
    quickViewItem,
    setQuickViewItem,
    /////////////////////////
    deleteUrl,
    galleryUrl,
    editUrl,
    s3Url,
    topSellerUrl,
    autoCompleteUrl,
    removeTopSellerUrl,
    addTopSellerUrl,
    getFramesUrl,
    deleteFramesUrl,
    /////////////////////////
    type,
    category,
    sortBy,
    artist,
    artSearch,
    setArtSearch,
    resetArtFilteringToDefault,
    /////////////////////////
    handleSortBy,
    handleType,
    handleCategory,
    handleArtist,
    /////////////////////////
    fetchedArt,
    setFetchedArt,
    /////////////////////////
    pageNumber,
    setPageNumber,
    /////////////////////////
    showingQuickView,
    setShowingQuickView,
    /////////////////////////
    showToast,
    setShowToast,
    /////////////////////////
    loading,
    setLoading,
    refreshArt,
    setRefreshArt,
  }
}

const ArtContainer = createContainer(useArtGlobal)
export default ArtContainer
