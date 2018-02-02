import React from 'react';
import './ButtonStart.css'
function ButtonStart(props) {
    return (
        <div className='row m-25'>
            <div className='text-center'>
                <button className='btn ButtonStart'>{props.start}</button>
            </div>
        </div>
    )
}
export default ButtonStart