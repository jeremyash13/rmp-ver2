import Layout from "../components/layout"
import SEO from "../components/seo"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import { DropDownMenuType } from "../components/DropDownMenuType"
import { DropDownMenuArtist } from "../components/DropDownMenuArtist"

import ArtSearch from "../components/ArtSearch"
import ArtCategories from "../components/ArtCategories"
import ArtView from "../components/ArtView"

const artPage = () => {
  const style = css`
    .mySelect {
      font-size: 1rem;
      padding: 0.7em;
      width: 100%;
      & div {
        width: 12px;
        height: 12px;
      }
    }
  `

  return (
    <Layout>
      <SEO title="Gallery" />
      <div css={style} className="art-page__wrapper p-12">
        <div className="query-ui mb-6 flex flex-col lg:flex-row">
          <ArtSearch className="search-wrapper h-53 mb-4 sm:max-w-lg sm:mx-auto lg:ml-0 lg:mr-auto lg:mb-0 lg:max-w-screen-sm" />
          <div className="flex flex-col sm:flex-row sm:max-w-md sm:mx-auto lg:mr-0 lg:ml-auto">
            <DropDownMenuType className="drop-down-wrapper ml-0 mb-4 sm:w-48 sm:ml-6 sm:mr-2 sm:mb-0 lg:mr-6" />
            <DropDownMenuArtist className="drop-down-wrapper sm:w-48 sm:ml-2 lg:ml-0" />
          </div>
        </div>
        <ArtCategories />
        <ArtView />
      </div>
    </Layout>
  )
}

export default artPage
