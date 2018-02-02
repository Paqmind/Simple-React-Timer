import React from 'react'
import "./Time.css"

function Time(props) {
    return (
        <div className='row mt-20'>
            <div className='text-center'>
                <h1 className='Time-numbers'>{props.time}</h1>
            </div>
        </div>
    )
}
export default  Time