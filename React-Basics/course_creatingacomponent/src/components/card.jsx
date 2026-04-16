import React from 'react'
import './card.css'

function Card(props){
    return(
        <div>{props.children}</div>
    )
}

export default Card;