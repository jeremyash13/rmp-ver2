/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function RemoveOption(props) {
  const style = css`
    width: 25px;
    &:hover {
      cursor: pointer;
      & svg rect {
        fill: #df5656;
        transition: fill 250ms ease-in-out;
      }
      & svg path {
        stroke: white;
        transition: stroke 250ms ease-in-out;
      }
    }
  `

  return (
    <div
      css={style}
      className="remove-option-wrapper shadow-md"
      onClick={props.clickHandler}
    >
      <svg
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="43" height="43" fill="#e7e6e6" />
        <path d="M8 22H35.5" stroke="#565656" strokeWidth="4" />
      </svg>
    </div>
  )
}
