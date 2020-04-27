import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuType = props => {
  const [value, setValue] = useState("Type: ALL")
  const style = css`
    
  `

  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      css={style}
      value={value}
      onChange={optionValue => setValue("Type: " + optionValue)}
      listStyle="max-height: 200px"
    >
      <RfddOption value="ALL">ALL</RfddOption>
      <RfddOption value="Canvas Giclee">Canvas Giclee</RfddOption>
      <RfddOption value="Paper Giclee">Paper Giclee</RfddOption>
      <RfddOption value="Gallery Wrap">Gallery Wrap</RfddOption>
    </Rfdd>
  )
}
