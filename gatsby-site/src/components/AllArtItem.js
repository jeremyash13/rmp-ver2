import React from "react"
import QuickViewClose from "./QuickViewClose"

export default function AllArtItem({ item }) {
  return (
    <div
      key={item.options[0].code}
      className="flex p-2 border-b border-light-light-gray cursor-pointer hover:border-blackish"
    >
      <div className="mr-auto">
        {item.title} ({item.type})
      </div>
      <div
        className="bg-white h-max-content my-auto py-px px-2 rounded border border-blackish"
        onClick={() => {}}
      >
        ✓
      </div>
    </div>
  )
}
