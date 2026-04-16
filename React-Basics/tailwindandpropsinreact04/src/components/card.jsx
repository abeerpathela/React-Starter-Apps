import React from 'react'


function Card({username}){
    console.log("props kaa username:",username);

    return(
        <div className='border-2 border-black border-solid' >
        <h1>Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempora rerum nemo explicabo error, officia provident consequuntur odit, nam repellat soluta sit dolorem mollitia! Ipsum recusandae corrupti omnis quod totam.</p>
        </div>
    )
}

export default Card 