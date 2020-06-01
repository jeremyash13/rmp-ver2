import { Rfdd, RfddOption } from "react-free-dropdown"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export default function CategoryDropDown(props) {
  const style = css`
    & div {
      background-color: #dddddd;
    }
  `
  return (
    <Rfdd
      className={props.className}
      selectClassName="mySelect"
      placeholder="Choose Category"
      css={style}
      value={props.value}
      onChange={optionValue => {
        props.changeHandler(optionValue)
      }}
      listStyle="max-height: 200px"
    >
      <RfddOption value="landscape">Landscape</RfddOption>
      <RfddOption value="western">Western</RfddOption>
      <RfddOption value="wildlife">Wildlife</RfddOption>
      <RfddOption value="patriotic">Patriotic</RfddOption>
    </Rfdd>
  )
}
