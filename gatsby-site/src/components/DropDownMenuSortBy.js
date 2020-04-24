import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuSortBy = props => {
  const [value, setValue] = useState("Sort By: Recently Added")
  const style = css`
    width: 100%;
    height: 43px;
    font-family: Roboto;
    font-weight: 300;
    color: #393939;
    .mySelect {
      font-size: 1rem;
    }
    div {
      background-color: #eae9e9;
    }
  `

  return (
    <Rfdd
      selectClassName="mySelect"
      css={style}
      value={value}
      onChange={optionValue => setValue("Sort By: " + optionValue)}
      listStyle="max-height: 200px"
    >
      <RfddOption value="Recently Added">Recently Added</RfddOption>
      <RfddOption value="Artist">Artist</RfddOption>
    </Rfdd>
  )
}
