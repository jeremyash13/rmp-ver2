import React from "react"
import CSS from "../css/DropDownMenu.css"
import { navigate } from "gatsby"
import { useAuth } from "react-use-auth"

export const DropDownMenu = () => {
  const { logout } = useAuth()
  return (
    <div className="drop-down-menu__wrapper">
      <ul id="drop-down-menu">
        <li
          onClick={() => {
            navigate("/app/dashboard")
          }}
        >
          Dashboard
        </li>
        <li
          onClick={() => {
            logout()
          }}
        >
          Log Out
        </li>
      </ul>
    </div>
  )
}
