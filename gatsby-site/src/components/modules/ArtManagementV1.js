import React, { useEffect } from "react"
import ArtContainer from "../state/ArtContainer"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export const ArtManagement = () => {
  const GlobalState = ArtContainer.useContainer()
  useEffect(() => {
    let query = {
      type: ["all"],
      category: ["all"],
    }

    const fetchArt = new Promise(async (resolve, reject) => {
      try {
        // const url = "https://rmpdemo-backend.herokuapp.com/art"
        const url = "http://localhost:3000/art"
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

  const style = css`
    max-width: 1268px;
    margin: 0 auto;
    background-color: #eae9e9;
    color: var(--text-black);
    & .entry-wrapper:nth-child(2n) {
      background-color: #dddddd;
    }
    .head {
      height: 78px;
      & div {
        display: inline-block;
      }
    }
    .title {
      width: 250px;
    }
    .artist {
      width: 250px;
    }
    .sku-wrapper {
      width: 500px;
    }
    .type {
      width: 200px;
    }
    .entry-wrapper {
      & div {
        display: inline-block;
        font-size: 0.9rem;
        font-weight: 300;
      }
      & .sku-code,
      & .size,
      & .price {
        display: block;
      }
      & .title,
      & .artist {
        text-transform: capitalize;
      }
      & .sku-item {
        margin-right: 20px;
      }
    }
  `

  return (
    <div css={style} id="art-management">
      <div className="head">
        <div className="title">Title</div>
        <div className="artist">Artist</div>
        <div className="sku-wrapper">SKU's</div>
        <div className="type">Type</div>
      </div>
      {GlobalState.fetchedArt.map(item => {
        return (
          <div className="entry-wrapper" data-item-id={item._id}>
            <div className="title">{item.title}</div>
            <div className="artist">{item.artist}</div>
            <div className="sku-wrapper">
              {item.options.map(i => (
                <div className="sku-item">
                  <div className="sku-code">{i.sku}</div>
                  <div className="size">{i.size}</div>
                  <div className="price">{i.price}</div>
                </div>
              ))}
            </div>
            <div className="type">{item.type}</div>
          </div>
        )
      })}
    </div>
  )
}
