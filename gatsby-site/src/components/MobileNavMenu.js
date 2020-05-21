import { Link } from "gatsby"

import { jsx, css } from "@emotion/core"
/** @jsx jsx */

export default function MobileNavMenu(props) {
  const style = css`
    position: fixed;
    background-color: white;
    z-index: 15;
    width: 100%;
    height: 100%;
    top: 0;
    font-family: Roboto;
    .menu__ul {
      padding-top: 50px;
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
      color: var(--text-black);
      &:visited {
        color: var(--text-black);
      }
    }
    @media (min-width: 700px) {
      display: none;
    }
  `
  return (
    <nav css={style} className={props.className}>
      <ul className="menu__ul">
        <li className="nav__link--home">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav__link--art">
          <Link to="/gallery/">GALLERY</Link>
        </li>
        <li className="nav__link--exclusive-artists">
          <Link to="/artists/">EXCLUSIVE ARTISTS</Link>
        </li>
        <li className="nav__link--framing">
          <Link to="/frames/">FRAMING</Link>
        </li>
        <li className="nav__link--contact">
          <Link to="/contact/">CONTACT/SHIPPING</Link>
        </li>
        <li className="nav__link--about-us">
          <Link to="/about/">ABOUT US</Link>
        </li>
      </ul>
    </nav>
  )
}
