import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuSortBy = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Sort By: Recently Added")
  const style = css`
    margin-bottom: 15px;
    & div {
      background-color: #dddddd;
    }
    @media (min-width: 600px) {
      margin-left: auto;
      margin-bottom: 0;
    }
  `

  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      css={style}
      value={value}
      onChange={optionValue => {
        setValue("Sort By: " + optionValue)
        GlobalState.handleSortBy(optionValue)
      }}
      listStyle="max-height: 200px"
    >
      <RfddOption value="Recently Added">Recently Added</RfddOption>
      <RfddOption value="Artist">Artist</RfddOption>
    </Rfdd>
  )
}
