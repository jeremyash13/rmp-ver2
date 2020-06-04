import React from 'react'

export default function TopSellerItem(props) {
    return (
        <div key={props.item.options[0].code}>
            {props.item.title}
        </div>
    )
}
