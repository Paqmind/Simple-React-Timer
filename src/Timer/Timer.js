import React, { Component } from "react";
import Time from "../Time/Time";
import "./Timer.css"

let formatToHMS = (seconds) => [Math.floor(seconds / 3600 % 24), Math.floor(seconds / 60 % 60), Math.ceil(seconds % 60)];
let formatToMS = (seconds) => [Math.floor(seconds / 60), Math.ceil(seconds % 60)];
let formatToS = (seconds) => [Math.floor(seconds)];

class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startValue : 7400,
            seconds: 7400,
            isStarted:true,
            format: "s"
        };
    }
    switchToHMS() {
        this.setState({
            format : "hms"
        })
    }
    switchToMS = () => {
        this.setState({
            format : "ms"
        })
    };
     switchToS (){
        this.setState({
            format : "s"
        })
    }
    tick () {
        if (this.state.seconds > 0) {
            this.setState({seconds: (this.state.seconds - 1)})
        }
    }
    startTimer () {
        this.timer = setInterval( () => this.tick(), 1000);
        this.setState({
            isStarted : false
        })
    }
    stopTimer () {
        clearInterval( this.timer);
        this.setState({
            isStarted : true
        })
    }
    resetTimer() {
        this.setState({
           seconds : this.state.startValue
        })
    }
    addOneSec() {
        this.setState({
            seconds: (this.state.seconds + 1)
        })
    }
    subOneSec() {
        if ( this.state.seconds > 0 ) {
            this.setState({
                seconds: (this.state.seconds - 1)
            })
        }
    }
    addOneMin() {
        this.setState({
            seconds : (this.state.seconds + 60)
        })
    }
    subOneMin() {
        if ( Math.floor(this.state.seconds) >= 60 ){
            this.setState({
                seconds : (this.state.seconds - 60)
            })
        }
    }

    render() {
        let seconds = this.state.seconds;
        let formattedTime = this.state.format === "s" ? formatToS(seconds).join(":") :
                            this.state.format === "ms" ? formatToMS(seconds).join(":")  :
                            this.state.format === "hms" ? formatToHMS(seconds).join(":") : "Unsupported format";
        let ButtonToggle = () => this.state.isStarted ?
                <button onClick={ ()=> this.startTimer() } className="Timer_toggle_btn">start</button> :
                <button onClick={ ()=> this.stopTimer() } className="Timer_toggle_btn">stop</button>;

        return (
            <div className="Timer">
                <Time time={formattedTime} />
                <div className="flex-container">
                    <div className="Timer_format">
                        <ul>
                            <li>
                                <button className="Timer_format_btn" onClick={() => this.switchToHMS()}>Hours : minutes : seconds</button>
                            </li>
                            <li>
                                <button className="Timer_format_btn" onClick={() => this.switchToMS()}>Minutes : seconds</button>
                            </li>
                            <li>
                                <button className="Timer_format_btn" onClick={() => this.switchToS()}>Seconds</button>
                            </li>
                        </ul>
                    </div>

                    <div className="Timer-buttons">
                        <div className="Timer_toggle">
                            <ButtonToggle/>
                            <button onClick={() => this.resetTimer()} className='Timer_toggle_btn'>Reset</button>
                        </div>
                        <div>
                            <ul className="Timer_btn-list">
                                <li>
                                    <button className="Timer_btn-list_btn" onClick={() => this.addOneMin()}> + 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer_btn-list_btn" onClick={() => this.subOneMin()}> - 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer_btn-list_btn" onClick={() => this.addOneSec()}> + 1 second </button>
                                </li>
                                <li>
                                    <button className="Timer_btn-list_btn" onClick={() => this.subOneSec()}> - 1 second </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Timer;