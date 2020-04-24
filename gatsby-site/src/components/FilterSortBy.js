import React, { useState } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import DropDownIcon from "./DropDownIcon"

export default function FilterSortBy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const style = css`
    width: 200px;
    height: auto;
    background-color: #eae9e9;
    font-family: Roboto;
    font-size: 0.8rem;
    font-weight: 300;
    color: #393939;
    position: relative;
    padding: 10px 20px;
    .icon {
      width: 15px;
      position: absolute;
      right: 7px;
      top: 16px;
    }
    &:hover {
      cursor: pointer;
    }
  `
  return (
    <div css={style}>
      {isMenuOpen === false && (
        <>
          <DropDownIcon className="icon" />
          <div>Sort By: Recently Added</div>
        </>
      )}
      {isMenuOpen === true && (
        <>
          <DropDownIcon className="icon" />
          <div>Sort By: Recently Added</div>
          <div>Sort By: Recently Added</div>
        </>
      )}
    </div>
  )
}
