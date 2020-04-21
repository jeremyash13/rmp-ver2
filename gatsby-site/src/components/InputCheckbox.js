import React, { useState } from "react"
import nanoid from "nanoid"

export default function InputCheckbox(props) {
  const [id] = useState(nanoid)

  return (
    <>
      <label key={id} htmlFor={props.name}>
        <input
          type="checkbox"
          checked={props.checked}
          name={props.name}
        />
        <span className="customCheckbox"></span>
        {props.text}
      </label>
    </>
  )
}
