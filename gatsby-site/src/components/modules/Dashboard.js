import { useState } from "react"
import Layout from "../layout"
import { ArtDatabaseView } from "./ArtDatabaseView"
import SEO from "../../components/seo"
import ArtSearch from "../ArtSearch"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import ArtContainer from "../state/ArtContainer"
import TopSellersView from "./TopSellersView"
import FramesView from "./FramesView"
import { Nav, NavItem, NavLink, Fade } from "shards-react"

const Dashboard = () => {
  const GlobalState = ArtContainer.useContainer()

  const [activeView, setActiveView] = useState("database") // database, topsellers, frames

  const style = css`
    max-width: 1268px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 150px;
    background-image: var(--bg-soft-gold-texture);
    background-repeat: repeat-y;
    background-size: fit;
    background-position-x: center;
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
    }
    .special-wrapper {
      transform: translateY(95%);
      width: 450px;
    }
    .ReactVirtualized__Grid__innerScrollContainer {
      margin-right: 10px;
    }
    .ReactVirtualized__Table__row [title="standard"],
    .ReactVirtualized__Table__row [title="decor"] {
      text-transform: capitalize;
    }
    .ReactVirtualized__Table__headerRow {
      background-color: #262626;
      padding: 2rem 0.75rem 1.75rem 1rem;
      border-bottom: solid 4px var(--gold-text);
      border-radius: 8px 8px 0 0;
    }
    .ReactVirtualized__Table__headerRow,
    .ReactVirtualized__Table__row {
      justify-content: space-between;
    }
    .ReactVirtualized__Table__headerColumn {
      display: flex;
    }
    .ReactVirtualized__Table__headerTruncatedText {
      margin: auto 0;
    }

    .ReactVirtualized__Table__row:nth-child(odd) {
      background-color: #1e1f22;
    }

    .ReactVirtualized__Table__row:nth-child(even) {
      background-color: #262626;
    }

    .ReactVirtualized__Table__row:hover {
      background-color: #3c3c3c;
    }
  `
  let View = () => {
    switch (activeView) {
      case "database":
        return <ArtDatabaseView />
      case "topsellers":
        return <TopSellersView />
      case "frames":
        return <FramesView />
    }
  }

  return (
    <Layout>
      <SEO title="Admin Dashboard" />
      <div css={style} className="page-wrapper">
        <div className="page-header">
          <div className="special-wrapper ml-auto">
            <ArtSearch className="ml-auto max-w-450" />
          </div>
        </div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={activeView === "database" ? true : false}
              className="cursor-pointer"
              onClick={() => {
                setActiveView("database")
              }}
            >
              Art Database
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeView === "topsellers" ? true : false}
              className="cursor-pointer"
              onClick={() => {
                setActiveView("topsellers")
              }}
            >
              Top Sellers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeView === "frames" ? true : false}
              className="cursor-pointer"
              onClick={() => {
                setActiveView("frames")
              }}
            >
              Frames
            </NavLink>
          </NavItem>
        </Nav>
        {<View />}
      </div>
    </Layout>
  )
}

export default Dashboard
