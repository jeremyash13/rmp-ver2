import { useEffect } from "react"
import ArtContainer from "./state/ArtContainer"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function Toast(props) {
  const GlobalState = ArtContainer.useContainer()

  useEffect(() => {
    setTimeout(() => {
      GlobalState.setShowToast(false)
    }, 7000)
  }, [])

  const style = css`
    color: #52a650;
    background-color: #bdffc8;
    width: 250px;
    height: 50px;
    position: fixed;
    transform: translateX(-50%);
    bottom: 25px;
    left: 50%;
    z-index: 100;
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: solid 2px #7fff7a;
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.35);
    animation: fade 7s ease-out;

    & .checkmark-wrapper {
      width: 15px;
      margin: auto 0;
      margin-left: auto;
    }

    & span {
      font-weight: 300;
      margin: auto 0;
      margin-right: auto;
      margin-left: 5px;
    }

    @keyframes fade {
      0% {
        opacity: 0;
      }
      5% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `
  return (
    <div css={style}>
      <div className="checkmark-wrapper">
        <svg viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9.5L11.5 20L30 1.5" stroke="#52a650" strokeWidth="2" />
        </svg>
      </div>
      <span>{props.message}</span>
    </div>
  )
}
