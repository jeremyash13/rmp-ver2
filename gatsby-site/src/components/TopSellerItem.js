import React from "react"
import QuickViewClose from "./QuickViewClose"

export default function TopSellerItem({ item, removeItemHandler }) {
  return (
    <div key={item.options[0].code} className="flex p-2 border-b border-blackish">
      <div className="mr-auto">
        {item.title} ({item.type})
      </div>
      <div className="bg-red-300 h-max-content my-auto p-1 cursor-pointer" onClick={() => removeItemHandler(item)}>
        <QuickViewClose className="w-3" />
      </div>
    </div>
  )
}
