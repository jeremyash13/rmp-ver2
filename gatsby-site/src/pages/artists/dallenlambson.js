import React from "react"
import { Link } from "gatsby"

import DallenLambson from "../../images/artists/DallenLambson.jpeg"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArtistBioNav from "../../components/ArtistBioNav"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const style = css`
  padding: 25px;

  & p {
    color: var(--text-black);
    font-weight: 300;
    letter-spacing: 0.075rem;
    line-height: 1.75rem;
  }

  & .img-wrapper {
    float: left;
    margin-right: 50px;
    width: 400px;
    height: 300px;
  }
  & img {
    box-shadow: 0 20px 20px -13px rgba(0, 0, 0, 0.6);
    width: 100%;
  }

  & .body-wrapper {
    max-width: 1268px;
    margin: 0 auto;
  }
`
const DallenLambsonPage = () => (
  <Layout>
    <SEO title="Dallen Lambson" />
    <div css={style} className="artist-page-wrapper">
      <ArtistBioNav artist="Dallen Lambson"/>
      <div className="body-wrapper">
        <div className="img-wrapper">
          <img src={DallenLambson} alt="photo of Dallen Lambson"></img>
        </div>
        <p>
          Dallen Lambson was born March 4, 1977 to Hayden and Cheryl Lambson in
          Pocatello Idaho. He was the third of eight children and has always
          felt blessed to grow up in a large family. Dallen has always
          considered his family and upbringing to be a significant influence for
          good in his life. “There is something very stabilizing that comes with
          being raised in a home where God and family take priority.” He has
          fond memories of road trips, camping, hunting, and fishing with his
          family. It was in that setting that he began to develop an interest in
          the work his Dad was doing as a wildlife artist.
        </p>
        <p>
          Dallen went on to graduate from Highland High School in 1995.
          Following high school he served a two year mission for the Church of
          Jesus Christ of Latter-day Saints in the upstate New York area. Upon
          returning home he went on to get an associate’s degree in General
          Business from Ricks College and later a Bachelor’s in Business
          Management from ISU.
        </p>
        <p>
          Like many things, success in the wildlife art industry requires some
          fortunate breaks along the way; people willing to steer you in the
          right direction and point you to the right people. “My Dad has been my
          biggest advocate. His efforts, combined with those of so many others,
          have been the driving force in this venture. Furthermore, I am one of
          those who believe that all good things in this life come from a loving
          Father in Heaven. To Him I am most grateful, and sincerely hope that
          my conduct and character reflect that gratitude.”
        </p>
        <p>
          Dallen Lambson, a second generation artist, has been fully immersed in
          the world of artistry throughout his life. Honored as Artist of the
          Year by both the Rocky Mountain Elk Foundation and the Mule Deer
          Foundation, many have come to appreciate Dallen's keen eye and steady
          hand. Drawing inspiration from God's canvas in the picturesque setting
          of Southeast Idaho, Dallen attributes his love of the outdoors to a
          rich family history spent outdoors hiking, fishing, and hunting.
        </p>
      </div>
    </div>
  </Layout>
)

export default DallenLambsonPage
