import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuSortBy = props => {
  const [value, setValue] = useState("Sort By: Recently Added")
  const style = css`
    width: 200px;
    height: auto;
    background-color: #eae9e9;
    font-family: Roboto;
    font-size: 0.8rem;
    font-weight: 300;
    color: #393939;
  `

  return (
    <Rfdd
      css={style}
      value={value}
      onChange={optionValue => setValue("Sort By: " + optionValue)}
    >
      <RfddOption value="Recently Added">Recently Added</RfddOption>
      <RfddOption value="Artist">Artist</RfddOption>
    </Rfdd>
  )
}
