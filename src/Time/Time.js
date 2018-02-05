import React from "react"
import "./Time.css"
function Time(props) {
    return(
        <div className="Time mt-20">
            <h1 className="Time-numbers">{props.time} </h1>
        </div>
    )
}
export default Time;
