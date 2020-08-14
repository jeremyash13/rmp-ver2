import { useState } from "react"
import Layout from "../layout"
import { ArtDatabaseView } from "./ArtDatabaseView"
import SEO from "../../components/seo"
import ArtSearch from "../ArtSearch"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import AddNewEntryButton from "../AddNewEntryButton"
import EditView from "./EditView"
import ArtContainer from "../state/ArtContainer"
import TopSellersView from "./TopSellersView"
import EditFramesView from "./EditFramesView"
import { Nav, NavItem, NavLink, Fade } from "shards-react"

const Dashboard = () => {
  const GlobalState = ArtContainer.useContainer()

  const [showingNewEntryView, setShowingNewEntryView] = useState(false)
  const [showingTopSellersView, setShowingTopSellersView] = useState(false)
  const [showingFramesView, setShowingFramesView] = useState(false)

  const [showingArtDatabaseView, setShowingArtDatabaseView] = useState(true)

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

  const switchView = tab => {
    switch (tab) {
      case 1:
        setShowingArtDatabaseView(true)
        setShowingTopSellersView(false)
        setShowingFramesView(false)
        break
      case 2:
        setShowingArtDatabaseView(false)
        setShowingTopSellersView(true)
        setShowingFramesView(false)
        break
      case 3:
        setShowingArtDatabaseView(false)
        setShowingTopSellersView(false)
        setShowingFramesView(true)
        break
    }
  }

  return (
    <Layout>
      <SEO title="Admin Dashboard" />
      <div css={style} className="page-wrapper">
        <div className="page-header">
          <ArtSearch className="ml-auto max-w-450" />
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={showingArtDatabaseView}
              className="cursor-pointer"
              onClick={() => {
                switchView(1)
              }}
            >
              Art Database
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={showingTopSellersView}
              className="cursor-pointer"
              onClick={() => {
                switchView(2)
              }}
            >
              Top Sellers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={showingFramesView}
              className="cursor-pointer"
              onClick={() => {
                switchView(3)
              }}
            >
              Frames
            </NavLink>
          </NavItem>
        </Nav>
        {showingArtDatabaseView && (
          <Fade in={true}>
            <AddNewEntryButton
              clickHandler={() => setShowingNewEntryView(true)}
            />
          </Fade>
        )}
        {showingArtDatabaseView && <ArtDatabaseView />}
        {showingTopSellersView && (
          <TopSellersView
            closeHandler={() => setShowingTopSellersView(false)}
          />
        )}
        {showingFramesView && (
          <EditFramesView closeHandler={() => setShowingFramesView(false)} />
        )}
      </div>

      {showingNewEntryView && (
        <EditView
          editItem={null}
          closeHandler={() => setShowingNewEntryView(false)}
          refreshFetchedArtHandler={() => {
            GlobalState.setRefreshArt(prevState => prevState + 1)
          }}
        />
      )}
    </Layout>
  )
}

export default Dashboard
