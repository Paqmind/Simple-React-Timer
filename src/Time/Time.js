import React from "react"
import "./Time.css"
function Time(props) {
    return(
        <div className="row mt-20">
            <h1 className="Time-numbers text-center">{props.time} </h1>
        </div>
    )
}
export default Time;
