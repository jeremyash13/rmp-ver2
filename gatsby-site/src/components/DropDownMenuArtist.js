import React, { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"
import Icon from "../images/svg/dropdown-icon.svg"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuArtist = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState("Artist: ALL")
  const style = css`
    height: 53px;
    & div {
      background-color: #2f2921;
      border: none;
    }
    & .mySelect {
      color: var(--gold-text-2);

      &:hover {
        color: var(--gold-2);
      }
    }
    & .rfdd-option:hover {
      box-shadow: 0 0 10px 100px #3e3529 inset;
    }
  `
  const optionStyle = {
    fontSize: "1rem",
    color: "var(--gold-text-2)",
  }

  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      icon={Icon}
      css={style}
      value={value}
      onChange={optionValue => {
        setValue("Artist: " + optionValue)
        GlobalState.handleArtist(optionValue)
      }}
      listStyle="max-height: 300px"
    >
      <RfddOption value="ALL" style={optionStyle}>
        All
      </RfddOption>
      <RfddOption value="Clark Kelley Price" style={optionStyle}>
        Clark Kelley Price
      </RfddOption>
      <RfddOption value="Dallen Lambson" style={optionStyle}>
        Dallen Lambson
      </RfddOption>
      <RfddOption value="Hayden Lambson" style={optionStyle}>
        Hayden Lambson
      </RfddOption>
      <RfddOption value="Manuel Mansanarez" style={optionStyle}>
        Manuel Mansanarez
      </RfddOption>
      <RfddOption value="Mitchell Mansanarez" style={optionStyle}>
        Mitchell Mansanarez
      </RfddOption>
      <RfddOption value="Travis Sylvester" style={optionStyle}>
        Travis Sylvester
      </RfddOption>
    </Rfdd>
  )
}
