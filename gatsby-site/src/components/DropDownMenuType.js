import { useState } from "react"
import { Rfdd, RfddOption } from "react-free-dropdown"
import Icon from "../images/svg/dropdown-icon.svg"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import ArtContainer from "./state/ArtContainer"

export const DropDownMenuType = props => {
  const GlobalState = ArtContainer.useContainer()
  const [value, setValue] = useState(`Type: ${GlobalState.type}`)
  const style = css`
    height: 53px;
    font-family: "Sorts Mill Goudy", serif;
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
        setValue("Type: " + optionValue)
        GlobalState.handleType(optionValue)
      }}
      listStyle="max-height: 300px"
    >
      <RfddOption value="ALL" style={optionStyle}>
        All
      </RfddOption>
      <RfddOption value="Canvas Giclee" style={optionStyle}>
        Canvas Giclee
      </RfddOption>
      <RfddOption value="Paper Giclee" style={optionStyle}>
        Paper Giclee
      </RfddOption>
      <RfddOption value="Gallery Wrap" style={optionStyle}>
        Gallery Wrap
      </RfddOption>
    </Rfdd>
  )
}
