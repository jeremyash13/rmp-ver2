import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuSortBy = props => {
  const [value, setValue] = useState("Sort By: Recently Added")
  const style = css`
    & div {
      background-color: #dddddd;
    }
    @media (min-width: 600px) {
      margin-left: auto;
    }
  `

  return (
    <Rfdd
      className={props.className}
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
