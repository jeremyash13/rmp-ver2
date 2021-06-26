import React, { useState } from "react"

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default function EditableTextInput(props) {
  const style = css`
    color: var(--gold-text);
    font-family: Rosarivo, serif;
    display: flex;
    position: relative;
    input {
      width: 100%;
      height: 100%;
      color: var(--gold-text-2);
      background: transparent;
      &::placeholder {
        color: var(--text-dark);
        font-family: Roboto;
        font-weight: 300;
        font-size: 0.8rem;
      }
    }

    .animated-element {
      content: "";
      height: 1px;
      background-color: var(--gold-text-2);
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
    }

    .stretch {
      animation-name: stretch;
      animation-duration: 0.2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      ${"" /* animation-direction: alternate; */}
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      ${"" /* animation-play-state: running; */}
    }
    .shrink {
      animation-name: shrink;
      animation-duration: 0.2s;
      animation-timing-function: ease-in-out;
      animation-delay: 0s;
      ${"" /* animation-direction: alternate; */}
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      ${"" /* animation-play-state: running; */}
    }

    @keyframes stretch {
      from {
        left: 50%;
        right: 50%;
      }
      to {
        left: 0%;
        right: 0%;
      }
    }
    @keyframes shrink {
      from {
        left: 0%;
        right: 0%;
      }
      to {
        left: 50%;
        right: 50%;
      }
    }
  `
  const [isFocused, setIsFocused] = useState(false)


  return (
    <>
      {props.children}
      <div css={style}>
        <input
          type="text"
          className={`${props.className} outline-none`}
          value={props.value}
          placeholder={props.placeholder}
          onChange={e => {
            if (!props.isReadOnly) {
              props.changeHandler(e.target.value)
            }
          }}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
        ></input>
        <div
          className={`animated-element ${isFocused ? "stretch" : "shrink"}`}
        ></div>
      </div>
    </>
  )
}
