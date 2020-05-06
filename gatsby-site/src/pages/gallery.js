import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import { DropDownMenuSortBy } from "../components/DropDownMenuSortBy"
import { DropDownMenuType } from "../components/DropDownMenuType"
import { DropDownMenuArtist } from "../components/DropDownMenuArtist"
import ArtSearch from "../components/ArtSearch"
import ArtCategories from "../components/ArtCategories"
import ArtView from "../components/ArtView"

const artPage = () => {
  const style = css`
    .query-ui {
      & ul div {
        font-size: 1rem;
      }
    }
    .drop-down-wrapper {
      width: 100%;
      font-family: Roboto;
      font-weight: 300;
      color: #393939;
      & .mySelect {
        font-size: 1rem;
        padding: 0.7em;
        width: 100%;
      }
    }
    .art-categories-wrapper {
      font-size: 0.9rem;
      padding-left: 10px;
      padding-right: 10px;
      color: var(--text-light-gray);
      & ul {
        display: flex;
        justify-content: space-between;
      }
      & li:hover {
        color: var(--text-dark);
        cursor: pointer;
      }
    }

    @media (min-width: 600px) {
      padding-top: 25px;

      .art-categories-wrapper {
        margin: 0 auto;
        padding-left: 25px;
        padding-right: 25px;
        max-width: 600px;
        margin-bottom: 25px;
      }

      .query-ui {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        & .mySelect {
          font-size: 1rem;
        }
        & .drop-down-wrapper {
          max-width: 250px;
          margin-right: 25px;
        }
        & .search-wrapper {
          font-size: 1rem;
          max-width: 600px;
          margin-right: 25px;
          margin-left: 25px;
          min-width: 300px;
        }
      }
    }

    @media (min-width: 800px) {
      .query-ui {
        & .mySelect {
          font-size: 1rem;
        }
        & .search-wrapper {
          font-size: 1rem;
        }
      }
    }
  `

  return (
    <Layout>
      <SEO title="Gallery" />
      <div css={style} className="art-page__wrapper">
        <div className="query-ui">
          <ArtSearch className="search-wrapper" />
          <DropDownMenuSortBy className="drop-down-wrapper" />
          <DropDownMenuType className="drop-down-wrapper" />
          <DropDownMenuArtist className="drop-down-wrapper" />
        </div>
        <ArtCategories className="art-categories-wrapper" />
        <ArtView />
      </div>
    </Layout>
  )
}

export default artPage
