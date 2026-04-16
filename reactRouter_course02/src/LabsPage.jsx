import React from 'react';
import { useNavigate } from 'react-router-dom';

function LabsPage(){
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return(
        <div className='flex flex-col'>
            <h1>This is Labs Page</h1>
            <button onClick={clickHandler}>Move to About Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>

    )
}

export default LabsPage;