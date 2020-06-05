import React from "react"

export default function AllArtItem({ item, addItemHandler }) {
  return (
    <div
      key={item.options[0].code}
      className="flex p-2 border-b border-light-light-gray cursor-pointer hover:border-blackish"
      onClick={() => {
        addItemHandler(item)
      }}
    >
      <div className="mr-auto">
        {item.title} ({item.type})
      </div>
      <div className="bg-white h-max-content my-auto py-px px-2 rounded border border-blackish">
        +
      </div>
    </div>
  )
}
