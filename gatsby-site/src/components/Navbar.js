import { Link } from "gatsby"
import Logo from "./Logo"
import GoldLine from "../images/nav-bkg-line-gold-2.png"
import "../css/navbar.css"

import { jsx, css } from "@emotion/core"
/** @jsx jsx */

const style = css`
  display: none;
  background-color: var(--bg-dark-blue);
  .logo-wrapper {
    margin: 0 0 0 35px;
    padding-bottom: 10px;
  }
  a {
    color: var(--gold-1);
    text-decoration: none;
    transition: color 0.15s ease-in-out;
  }
  & ul {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    padding-top: 15px;
    & li {
      margin: 0 5px;
      text-align: center;
      & a:hover {
        text-decoration: none;
        color: var(--gold-2);
      }
    }
  }
  @media (min-width: 700px) {
    display: block;
  }
  @media (min-width: 850px) {
    padding: 0 2rem;
  }
`
export const Navbar = props => {
  return (
    <nav css={style} className={`${props.className} main-nav`}>
      <ul className="text-xs lg:text-sm">
        <li className="flex-shrink-0">
          <Link to="/">Home</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/gallery/">Gallery</Link>
        </li>
        <li className="nav__link--exclusive-artists flex-shrink-0">
          <Link to="/artists/">
            Exclusive
            <br />
            Artists
          </Link>
        </li>
        <li className="logo-wrapper">
          <Logo />
        </li>
        <li className="flex-shrink-0">
          <Link to="/frames/">Framing</Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/contact/">
            Contact/
            <br />
            Shipping
          </Link>
        </li>
        <li className="flex-shrink-0">
          <Link to="/about/">About Us</Link>
        </li>
      </ul>
      <img
        src={GoldLine}
        className="absolute left-1/2 transform -translate-x-1/2 z-30"
      ></img>
    </nav>
  )
}

export default Navbar
