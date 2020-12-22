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
    font-family: Rosarivo, serif;
    background-image: var(--bg-soft-gold-texture);
    background-repeat: repeat-y;
    background-size: fit;
    background-position-x: center;
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
      font-size: 1.35rem;
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
          <Link to="/">Home</Link>
        </li>
        <li className="">
          <Link to="/gallery/">Gallery</Link>
        </li>
        <li className="">
          <Link to="/artists/">Exclusive Artists</Link>
        </li>
        <li className="">
          <Link to="/frames/">Framing</Link>
        </li>
        <li className="">
          <Link to="/contact/">Contact/Shipping</Link>
        </li>
        <li className="">
          <Link to="/about/">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}
