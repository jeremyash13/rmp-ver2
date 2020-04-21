import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArtNavigation from "../components/ArtNavigation"
import ArtView from "../components/ArtView"
import TextCarousel from "../components/TextCarousel"

const artPage = () => {
  return (
    <Layout>
      <div className="art-page__wrapper">
        <SEO title="Browse art" />
        <ArtNavigation />
        <TextCarousel className="text-carousel__wrapper" timer={7000} />
        <ArtView />
      </div>
    </Layout>
  )
}

export default artPage
