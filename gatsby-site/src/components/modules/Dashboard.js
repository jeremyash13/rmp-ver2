import { useState } from "react"
import Layout from "../layout"
import { ArtDatabaseView } from "./ArtDatabaseView"
import SEO from "../../components/seo"
import ArtSearch from "../ArtSearch"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import ArtContainer from "../state/ArtContainer"
import TopSellersView from "./TopSellersView"
import EditFramesView from "./EditFramesView"
import { Nav, NavItem, NavLink, Fade } from "shards-react"

const Dashboard = () => {
  const GlobalState = ArtContainer.useContainer()

  const [activeView, setActiveView] = useState("database") // database, topsellers, frames

  const style = css`
    max-width: 1268px;
    margin: 0 auto;
    padding-top: 50px;
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
  `
  let MainView = () => {
    switch (activeView) {
      case "database":
        return <ArtDatabaseView />
      case "topsellers":
        return <TopSellersView />
      case "frames":
        return <EditFramesView />
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
        {<MainView />}
      </div>
    </Layout>
  )
}

export default Dashboard
