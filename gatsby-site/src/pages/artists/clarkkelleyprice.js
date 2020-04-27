import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import ClarkKelleyPrice from "../../images/artists/ClarkKelleyPrice.jpg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArtistBioNav from "../../components/ArtistBioNav"

const style = css``
const ClarkKelleyPricePage = () => (
  <Layout>
    <SEO title="Clark Kelley Price" />
    <div css={style} className="artist-page-wrapper">
      <ArtistBioNav />
      <img src={ClarkKelleyPrice}></img>
      <p>
        Clark Kelley Price was born in Idaho Falls, Idaho in 1945. As a child he
        loved to draw and even his earliest artistic efforts told stories. His
        parents recognized his talent and encouraged him to use it. He received
        his formal education at Rick's College and Brigham Young University,
        however his deep commitment to the Gospel, his love of the West— both
        modern and historical—and his life experiences have been his greatest
        resources in developing his talent.
      </p>
      <p>
        He spent his early years living in a log cabin that his parents had
        built in Montana. Surrounded by nature, Clark developed an appreciation
        for the land, as well as an ability to observe the kinds of details that
        many overlook. He has been able to call upon his observations and
        experiences to create the art for which he has become known. The subject
        matter of his work ranges from religious to old west.
      </p>
      <p>
        He has painted full-time since 1973. The Ensign Magazine often used his
        art. He has done paintings for the LDS temples in Tonga, Samoa, and
        Seattle, as well as for the MTC in Provo, Utah. He has illustrated
        several books including Porter Rockwell, A biography and has illustrated
        the covers for books by John H. Groberg. He has won awards from the
        Church International Art contests and International Poster contests.
      </p>
      <p>
        Clark is well-known in the Western art world. His art is compared to
        that of master Western artists and is highly sought after. Each painting
        tells a unique story. These works are found in private collections
        throughout the USA and abroad. His western art has earned him awards
        from the Arts for the Parks program as well as from the Wyoming
        Historical Society.
      </p>
      <p>
        He and his wife, Irene, reside in Star Valley, Wyoming. They are the
        parents of seven children.
      </p>
    </div>
  </Layout>
)

export default ClarkKelleyPricePage
