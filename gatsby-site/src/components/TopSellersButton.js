import React from "react"

export default function TopSellersButton(props) {
  return (
    <div
      className="bg-light-light-gray font-light px-3 py-2 mr-4 cursor-pointer 
    flex items-center hover:bg-mint-green hover:text-white 
    transition-colors duration-200 ease-in-out"
    onClick={props.clickHandler}
    >
      <span>Set Top Sellers</span>
    </div>
  )
}
