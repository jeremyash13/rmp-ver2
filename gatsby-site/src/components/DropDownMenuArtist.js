import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuArtist = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Artist: ALL")
  const style = css`
    & div {
      background-color: #dddddd;
    }
  `
  const optionStyle = {
    fontSize: "1rem",
  }

  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      css={style}
      value={value}
      onChange={optionValue => {
        setValue("Artist: " + optionValue)
        GlobalState.handleArtist(optionValue)
      }}
      listStyle="max-height: 300px"
    >
      <RfddOption value="ALL" style={optionStyle}>All</RfddOption>
      <RfddOption value="Clark Kelley Price" style={optionStyle}>Clark Kelley Price</RfddOption>
      <RfddOption value="Dallen Lambson" style={optionStyle}>Dallen Lambson</RfddOption>
      <RfddOption value="Hayden Lambson" style={optionStyle}>Hayden Lambson</RfddOption>
      <RfddOption value="Manuel Mansanarez" style={optionStyle}>Manuel Mansanarez</RfddOption>
      <RfddOption value="Mitchell Mansanarez" style={optionStyle}>Mitchell Mansanarez</RfddOption>
      <RfddOption value="Travis Sylvester" style={optionStyle}>Travis Sylvester</RfddOption>
    </Rfdd>
  )
}
