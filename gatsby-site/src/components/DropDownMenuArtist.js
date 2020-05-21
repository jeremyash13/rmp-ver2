import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuArtist = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Artist: ALL")
  const style = css`
    margin-bottom: 15px;
    & div {
      background-color: #dddddd;
    }
    @media (min-width: 700px) {
      margin: 0;
    }
  `

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
      listStyle="max-height: 200px"
    >
      <RfddOption value="ALL">ALL</RfddOption>
      <RfddOption value="Clark Kelley Price">Clark Kelley Price</RfddOption>
      <RfddOption value="Dallen Lambson">Dallen Lambson</RfddOption>
      <RfddOption value="Hayden Lambson">Hayden Lambson</RfddOption>
      <RfddOption value="Manuel Mansanarez">Manuel Mansanarez</RfddOption>
      <RfddOption value="Mitchell Mansanarez">Mitchell Mansanarez</RfddOption>
      <RfddOption value="Travis Sylvester">Travis Sylvester</RfddOption>
    </Rfdd>
  )
}
