import { Link } from "gatsby"

import { jsx, css } from "@emotion/core"
/** @jsx jsx */

export default function MobileNavMenu(props) {
  const style = css`
    position: fixed;
    background-color: var(--bg-dark-blue);
    z-index: 30;
    width: 100%;
    height: 100%;
    top: 0;
    font-family: Roboto;
    .menu__ul {
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    li {
      margin: 0 auto;
    }
    a {
      padding: 25px;
      text-decoration: none;
      color: var(--gold-text-2);
      &:visited {
        color: var(--gold-text-2);
      }
    }
    @media (min-width: 700px) {
      display: none;
    }
  `
  return (
      <nav css={style} className={props.className}>
        <ul className="menu__ul">
          <li className="">
            <Link to="/">HOME</Link>
          </li>
          <li className="">
            <Link to="/gallery/">GALLERY</Link>
          </li>
          <li className="">
            <Link to="/artists/">EXCLUSIVE ARTISTS</Link>
          </li>
          <li className="">
            <Link to="/frames/">FRAMING</Link>
          </li>
          <li className="">
            <Link to="/contact/">CONTACT/SHIPPING</Link>
          </li>
          <li className="">
            <Link to="/about/">ABOUT US</Link>
          </li>
        </ul>
      </nav>
  )
}
