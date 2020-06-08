import React from "react"
import QuickViewClose from "./QuickViewClose"

export default function TopSellerItem({ item, removeItemHandler }) {
  return (
    <div key={item.options[0].code} className="flex p-2 border-b border-blackish">
      <div className="mr-auto">
        {item.title} ({item.type})
      </div>
      <div className="bg-red-500 px-1 text-white text-2xl h-max-content ml-4 cursor-pointer" onClick={() => removeItemHandler(item)}>
        ×
      </div>
    </div>
  )
}
