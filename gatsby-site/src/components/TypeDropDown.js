import React from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function TypeDropDown(props) {
  const style = css`
    & div {
      background-color: #dddddd;
    }
  `
  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      css={style}
      value={props.value}
      onChange={optionValue => {
        props.changeHandler(optionValue)
      }}
      listStyle="max-height: 200px"
    >
      <RfddOption value="Canvas Giclee">Canvas Giclee</RfddOption>
      <RfddOption value="Paper Giclee">Paper Giclee</RfddOption>
      <RfddOption value="Gallery Wrap">Gallery Wrap</RfddOption>
    </Rfdd>
  )
}
