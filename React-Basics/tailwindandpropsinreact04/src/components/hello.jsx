import React from 'react'

function hello({username,btntext}){
    return(
        <div className='py-10 px-10 border-2 border-solid border-amber-500 rounded bg-amber-900 space-y-20 mb-10'>
        <h1>Hello, {username}</h1>
        <button>{btntext}</button>
        </div>
    )
}

export default hello;