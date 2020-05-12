import React from 'react'

import ArtContainer from "./state/ArtContainer"

export default function ArtCategories(props) {
  const GlobalState = ArtContainer.useContainer()
  return (
        <div className={props.className}>
            <ul>
                <li onClick={() => {GlobalState.handleCategory('all')}}>ALL</li>
                <li onClick={() => {GlobalState.handleCategory('landscape')}}>LANDSCAPE</li>
                <li onClick={() => {GlobalState.handleCategory('western')}}>WESTERN</li>
                <li onClick={() => {GlobalState.handleCategory('wildlife')}}>WILDLIFE</li>
                <li onClick={() => {GlobalState.handleCategory('patriotic')}}>PATRIOTIC</li>
            </ul>
        </div>
    )
}
