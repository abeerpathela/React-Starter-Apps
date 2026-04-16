import React from 'react'
import './item.css'

function Item(props){
    const itemName = props.name;
    return (
        <>
            <p className='para'>{itemName}</p>
            <p>{props.children}</p>
        </>
    )
}

export default Item;