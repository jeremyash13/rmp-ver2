import { useState } from "react"
import Layout from "../layout"
import { ArtManagement } from "./ArtManagement"
import SEO from "../../components/seo"
import ArtSearch from "../ArtSearch"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import AddNewEntryButton from "../AddNewEntryButton"
import EditView from "./EditView"
import ArtContainer from "../state/ArtContainer"

const Dashboard = () => {
  const GlobalState = ArtContainer.useContainer()

  const [showingNewEntryView, setShowingNewEntryView] = useState(false)

  const style = css`
    max-width: 1268px;
    margin: 0 auto;
    padding-top: 50px;
    h1 {
      font-weight: 400;
      font-size: 2rem;
      width: 210px;
      height: 50px;
      margin-right: 50px;
      margin-bottom: 0;
    }
    .page-header {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      background-color: #f5f5f5;
    }
  `

  return (
    <Layout>
      <SEO title="Admin Dashboard" />
      <div css={style} className="page-wrapper">
        <div className="page-header">
          <h1>Art Database</h1>
          <AddNewEntryButton
            clickHandler={() => setShowingNewEntryView(true)}
          />
          <ArtSearch className="ml-auto max-w-screen-sm"/>
        </div>
        <ArtManagement />
      </div>
      {showingNewEntryView && (
        <EditView
          editItem={null}
          closeHandler={() => setShowingNewEntryView(false)}
          refreshFetchedArtHandler={() => {
            GlobalState.setRefreshFetchedArt(GlobalState.refreshFetchedArt + 1)
          }}
        />
      )}
    </Layout>
  )
}

export default Dashboard
