import { Link } from "gatsby"
import Logo from "./Logo"

import { jsx, css } from "@emotion/core"
/** @jsx jsx */

const style = css`
  display: none;
  background-color: white;
  .logo-wrapper {
    max-width: 150px;
  }
  a {
    color: var(--text-light-gray);
    text-decoration: none;
  }
  & ul {
    height: 100px;
    font-family: Roboto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    & li {
      margin: 0 5px;
      & a:hover {
        color: var(--text-black);
      }
    }
  }
  @media (min-width: 700px) {
    display: block;
  }
`
export const Navbar = props => {
  return (
    <nav css={style} className={props.className}>
      <ul className="text-xs lg:text-sm">
        <li className="flex-shrink-0">
          <Link to="/">HOME</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/gallery/">GALLERY</Link>
        </li>
        <li className="nav__link--exclusive-artists flex-shrink-0">
          <Link to="/artists/">EXCLUSIVE ARTISTS</Link>
        </li>
        <li className="logo-wrapper">
          <Logo />
        </li>
        <li className="flex-shrink-0">
          <Link to="/frames/">FRAMING</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/contact/">CONTACT/SHIPPING</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/about/">ABOUT US</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
