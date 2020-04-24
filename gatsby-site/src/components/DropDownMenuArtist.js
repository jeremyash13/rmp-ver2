import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export const DropDownMenuArtist = props => {
  const [value, setValue] = useState("Artist: ALL")
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
      onChange={optionValue => setValue("Artist: " + optionValue)}
      listStyle="max-height: 200px"
    >
      <RfddOption value="Clark Kelley Price">Clark Kelley Price</RfddOption>
      <RfddOption value="Dallen Lambson">Dallen Lambson</RfddOption>
      <RfddOption value="Hayden Lambson">Hayden Lambson</RfddOption>
      <RfddOption value="Manuel Mansanarez">Manuel Mansanarez</RfddOption>
      <RfddOption value="Mitchell Mansanarez">Mitchell Mansanarez</RfddOption>
      <RfddOption value="Travis Sylvester">Travis Sylvester</RfddOption>
    </Rfdd>
  )
}
