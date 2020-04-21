import React, { useEffect } from "react"
import nanoid from "nanoid"
import CSS from "../css/Artview.css"

import ArtContainer from "./state/ArtContainer"

export default function ArtView() {
  const GlobalState = ArtContainer.useContainer()
  useEffect(() => {
    let query = {
      type: [],
      category: [],
      sortBy: [],
    }
    for (const property in GlobalState.type) {
      if (GlobalState.type[property] === true) {
        query.type = [...query.type, property]
      }
    }
    for (const property in GlobalState.category) {
      if (GlobalState.category[property] === true) {
        query.category = [...query.category, property]
      }
    }
    for (const property in GlobalState.sortBy) {
      if (GlobalState.sortBy[property] === true) {
        query.sortBy = [...query.sortBy, property]
      }
    }
    const fetchArt = new Promise(async (resolve, reject) => {
      try {
        const url = "https://rmpdemo-backend.herokuapp.com/art"
        // const url = "https://api.rmpdemo.net/art"
        // const url = "http://localhost:3000/art"
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(query),
        })
        resolve(result)
      } catch (err) {
        console.log(err)
      }
    })
      .then(data => data.json())
      .then(json => {
        GlobalState.setFetchedArt(json)
      })
  }, [GlobalState.type, GlobalState.category, GlobalState.sortBy])

  const modifiedTypeForDisplay = item => {
    if (item.type === "giclee") {
      return "giclée"
    } else {
      return item.type
    }
  }

  return (
    <div className="art-view__wrapper--open">
      {GlobalState.fetchedArt.map(item => {
        const id = nanoid()
        return (
          <div key={id} className="art-view__wrapper--img">
            <img src={item.src} className="art-view__img"></img>
            <span className="art-view__span--title">{item.title}</span>
            <span className="art-view__span--artist">{item.artist}</span>
            {item.options.map(option => (
              <div className="art-view__wrapper--options">
                <span className="options--sku">{option.sku}</span>
                <span className="options--size">{option.size}</span>
                <span className="options--price">{`$${option.price}`}</span>
              </div>
            ))}
            <span className="art-view__span--type">
              {modifiedTypeForDisplay(item)}
            </span>
            <span className="art-view__span--age">
              {new Date(item.age).toLocaleDateString()}
            </span>
          </div>
        )
      })}
    </div>
  )
}
