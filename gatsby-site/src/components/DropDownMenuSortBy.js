import { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuSortBy = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Sort by: Recently Added")
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
        setValue("Sort by: " + optionValue)
        GlobalState.handleSortBy(optionValue)
      }}
      listStyle="max-height: 300px"
    >
      <RfddOption value="Recently Added" style={optionStyle}>
        Recently Added
      </RfddOption>
      <RfddOption value="Top Sellers" style={optionStyle}>
        Top Sellers
      </RfddOption>
    </Rfdd>
  )
}
