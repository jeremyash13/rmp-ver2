import React, { useEffect } from "react"
import CSS from "../../css/ArtManagement.css"
import ArtContainer from "../state/ArtContainer"

export const ArtManagement = () => {
  const GlobalState = ArtContainer.useContainer()
  useEffect(() => {
    let query = {
      type: ["all"],
      category: ["all"],
    }

    const fetchArt = new Promise(async (resolve, reject) => {
      try {
        const url = "https://rmpdemo-backend.herokuapp.com/art"
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
  }, [])

  return (
    <div id="art-management">
      <div className="item__wrapper">
        <div className="item">{""}</div>
        <div className="item">{"Title"}</div>
        <div className="item">{"Artist"}</div>
      </div>
      {GlobalState.fetchedArt.map(item => {
        return (
          <div className="item__wrapper">
            <div className="item">
              <input type="checkbox"></input>
            </div>

            <div className="item">{item.title}</div>
            <div className="item">{item.artist}</div>
            <button className="item__button">Edit</button>
          </div>
        )
      })}
      <div className="item__wrapper">
        <button className="item__button">Delete Selected</button>
      </div>
    </div>
  )
}
