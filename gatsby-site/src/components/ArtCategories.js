import React from 'react'

export default function ArtCategories(props) {
    return (
        <div className={props.className}>
            <ul>
                <li>ALL</li>
                <li>LANDSCAPE</li>
                <li>WESTERN</li>
                <li>WILDLIFE</li>
                <li>PATRIOTIC</li>
            </ul>
        </div>
    )
}
