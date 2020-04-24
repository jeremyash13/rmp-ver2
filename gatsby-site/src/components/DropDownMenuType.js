import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuType = props => {
  const [value, setValue] = useState("Type: ALL")
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
      onChange={optionValue => setValue("Type: " + optionValue)}
    >
      <RfddOption value="Canvas Giclee">Canvas Giclee</RfddOption>
      <RfddOption value="Paper Giclee">Paper Giclee</RfddOption>
      <RfddOption value="Gallery Wrap">Gallery Wrap</RfddOption>
    </Rfdd>
  )
}
