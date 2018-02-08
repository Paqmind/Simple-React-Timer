import React from "react"
import "./Time.css"
function Time(props) {
    return(
        <div className="Time">
            <h1 className="Time__numbers">{props.time} </h1>
        </div>
    )
}
export default Time;
