import React from "react"

export default function TopSellersSearch({ searchHandler, value }) {
  return (
    <div className="relative mb-4">
      <input
        value={value}
        className="art-navigation__input--search h-full border-b border-blackish w-full py-px px-6"
        type="text"
        placeholder="Search"
        onChange={e => {
          searchHandler(e.target.value)
        }}
      ></input>
      <svg
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 absolute transform -translate-y-1/2 top-1/2 left-0"
      >
        <line
          y1="-1.5"
          x2="11.1409"
          y2="-1.5"
          transform="matrix(0.702103 0.712076 -0.702103 0.712076 12.6036 15.109)"
          stroke="#393939"
          strokeWidth="3"
        />
        <path
          d="M15.7729 9.10545C15.7729 13.0663 12.6106 16.2531 8.73937 16.2531C4.86813 16.2531 1.70587 13.0663 1.70587 9.10545C1.70587 5.14459 4.86813 1.95784 8.73937 1.95784C12.6106 1.95784 15.7729 5.14459 15.7729 9.10545Z"
          stroke="#393939"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}
