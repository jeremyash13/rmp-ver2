import { useState } from "react"
import { createContainer } from "unstated-next"

const useArtGlobal = () => {
  const [type, setType] = useState("all")
  const [sortBy, setSortBy] = useState("recentlyAdded")
  const [artist, setArtist] = useState("all")
  const [category, setCategory] = useState("all")
  const [artSearch, setArtSearch] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const [fetchedArt, setFetchedArt] = useState()
  // const [fetchedArt, setFetchedArt] = useState([{
  //   _id: "",
  //   type: "",
  //   title: "",
  //   artist: "",
  //   src: "",
  //   options: [{code: '', size: '', price: ''}],
  //   tags: [''],
  //   age: ""
  // }])
  const [refreshFetchedArt, setRefreshFetchedArt] = useState(0)
  const [showingQuickView, setShowingQuickView] = useState(false)
  const [showToast, setShowToast] = useState(false)


  
  const [deleteUrl, setDeleteUrl] = useState("http://localhost:3000/delete")
  const [galleryUrl, setGalleryUrl] = useState("http://localhost:3000/gallery")
  const [editUrl, setEditUrl] = useState("http://localhost:3000/edit")
  const [s3Url, setS3Url] = useState("http://localhost:3000/s3")

  // const [deleteUrl, setDeleteUrl] = useState("https://rmp-server.herokuapp.com/delete")
  // const [galleryUrl, setGalleryUrl] = useState("https://rmp-server.herokuapp.com/gallery")
  // const [editUrl, setEditUrl] = useState("https://rmp-server.herokuapp.com/edit")
  // const [s3Url, setS3Url] = useState("https://rmp-server.herokuapp.com/s3")



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
    deleteUrl,
    galleryUrl,
    editUrl,
    s3Url,
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
    pageNumber,
    setPageNumber,
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
