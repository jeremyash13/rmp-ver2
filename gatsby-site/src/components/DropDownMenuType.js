import { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuType = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Type: ALL")
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
        setValue("Type: " + optionValue)
        GlobalState.handleType(optionValue)
      }}
      listStyle="max-height: 300px"
    >
      <RfddOption value="ALL" style={optionStyle}>All</RfddOption>
      <RfddOption value="Canvas Giclee" style={optionStyle}>
        Canvas Giclee
      </RfddOption>
      <RfddOption value="Paper Giclee" style={optionStyle}>
        Paper Giclee
      </RfddOption>
      <RfddOption value="Gallery Wrap" style={optionStyle}>Gallery Wrap</RfddOption>
    </Rfdd>
  )
}
