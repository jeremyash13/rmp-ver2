import { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuType = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Type: ALL")
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
        setValue("Type: " + optionValue)
        GlobalState.handleType(optionValue)
      }}
      listStyle="max-height: 200px"
    >
      <RfddOption value="ALL">ALL</RfddOption>
      <RfddOption value="Canvas Giclee">Canvas Giclee</RfddOption>
      <RfddOption value="Paper Giclee">Paper Giclee</RfddOption>
      <RfddOption value="Gallery Wrap">Gallery Wrap</RfddOption>
    </Rfdd>
  )
}
