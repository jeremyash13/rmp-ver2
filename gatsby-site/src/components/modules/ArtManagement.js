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
    .entry-wrapper:hover {
      cursor: pointer;
      border: solid 1px var(--text-light-gray);
      transform: scale(1.02);
    }
    ${'' /* .entry-wrapper:nth-child(2n) {
      background-color: #dddddd;
    } */}
    thead tr {
      height: 78px;
    }
    th {
      background-color: #dddddd;
      border: none;
      font-weight: 400;
      padding: 0;
    }
    td {
      border: none;
      font-weight: 300;
      font-size: 0.9rem;
      padding: 0;
    }
    .sku-item {
      padding-right: 15px;
    }
    .title,
    .artist,
    .type {
      text-transform: capitalize;
    }
  `

  return (
    <table css={style} id="art-management">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>SKU's</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {GlobalState.fetchedArt.map(item => {
          return (
            <tr className="entry-wrapper" data-item-id={item._id}>
              <td className="title">{item.title}</td>
              <td className="artist">{item.artist}</td>
              <td className="sku-wrapper">
                {item.options.map(i => (
                  <td className="sku-item">
                    <tr className="sku-code">{i.sku}</tr>
                    <tr className="size">{i.size}</tr>
                    <tr className="price">{i.price}</tr>
                  </td>
                ))}
              </td>
              <td className="type">{item.type}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
