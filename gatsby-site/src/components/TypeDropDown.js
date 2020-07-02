import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function TypeDropDown(props) {
  const style = css`
    & div {
      background-color: #dddddd;  
    }
    & div[id="select"] {
      border-bottom: solid 2px #A0AEC0;
    }
  `
  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      placeholder="Choose Type"
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
