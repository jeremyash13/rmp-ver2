/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function RemoveOption(props) {
  const style = css`
    width: 25px;
    &:hover {
      cursor: pointer;
      & svg path {
        stroke: white;
        transition: stroke 200ms ease-in-out;
      }
    }
  `

  return (
    <div
      css={style}
      className="remove-option-wrapper cursor-pointer bg-light-light-gray hover:bg-error-red transition-colors duration-200 ease-in-out"
      onClick={props.clickHandler}
    >
      <svg
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 22H35.5" stroke="#565656" strokeWidth="4" />
      </svg>
    </div>
  )
}
