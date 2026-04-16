import React from 'react'
import './itemDate.css'

function ItemDate(props){
    let date=props.day;
    let month=props.month;
    let year=props.year;

     return(
        <div class="itemDateKiDate">
            <span>{date} </span>
            <span>{month} </span>
            <span>{year} </span>
        </div>
     )
}

export default ItemDate