import React, { useState, useRef } from "react"
import nanoid from "nanoid"
import ArtContainer from './state/ArtContainer'

export default function ProductFilter(props) {
  const [menuState, setMenuState] = useState(props.expandByDefault)
  const GlobalState = ArtContainer.useContainer()

  const outputComponents = props.children.map(child => {
    //assign keys to children elements
    const key = nanoid()
    return <li key={key}
    onClick={(e) => {GlobalState.handleInput(e)}}
    >{child}</li>
  })
  return (
    <>
      <h3
        className={`art-navigation__header--${props.text}`}
        onClick={() => setMenuState(!menuState)}
      >
        {props.text}
        {menuState ? " -" : " +"}
      </h3>
      <ul
        className={props.className}
        style={menuState ? { display: "flex" } : { display: "none" }}
      >
        {outputComponents}
      </ul>
    </>
  )
}
