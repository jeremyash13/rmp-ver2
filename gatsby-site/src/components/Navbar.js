import { Link } from "gatsby"
import Logo from "./Logo"

import { jsx, css } from "@emotion/core"
/** @jsx jsx */

const style = css`
  display: none;
  margin-top: 0.5rem;
  font-size: 14px;
  background-color: white;
  .logo__wrapper {
    width: 150px;
  }
  a {
    color: var(--text-light-gray);
    text-decoration: none;
  }
  .desktop-menu__ul {
    height: 100px;
    font-size: 0.6rem;
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
  @media (min-width: 800px) {
    .desktop-menu__ul {
      font-size: 0.8rem;
    }
  }
`
export const Navbar = props => {
  return (
    <nav css={style} className={props.className}>
      <ul className="desktop-menu__ul">
        <li className="nav__link--home">
          <Link to="/">HOME</Link>
        </li>
        <li className="nav__link--art">
          <Link to="/gallery/">GALLERY</Link>
        </li>
        <li className="nav__link--exclusive-artists">
          <Link to="/artists/">EXCLUSIVE ARTISTS</Link>
        </li>
        <li className="nav__link--logo">
          <Logo />
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

export default Navbar
