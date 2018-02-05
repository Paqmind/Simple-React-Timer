import React, { Component } from "react";
import Time from "../Time/Time";
import "./Timer.css"


class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startValue : 7400,
            seconds: 7400,
            isStarted:true,
            formatHourMinSec: false,
            formatMinSec: false,
            formatSec: false
        };
    }
    takeFormatHMS = (seconds) => Math.floor(seconds / 3600 % 24) + ":" + Math.floor(seconds / 60 % 60) + ":" +  Math.ceil(seconds % 60);
    takeFormatMS = (seconds) => Math.floor(seconds / 60) + ":" +  Math.ceil(seconds % 60);
    takeFormatTS = (seconds) => Math.floor(seconds);

    switchOnHourMinSec() {
        this.setState({
            formatHourMinSec :  true,
            formatMinSec : false,
            formatSec : false
        })
    }
    switchOnMinSec = () => {
        this.setState({
            formatHourMinSec : false,
            formatMinSec : true,
            formatSec : false
        })
    };
     switchOnSec (){
        this.setState({
            formatHourMinSec :  false,
            formatMinSec : false,
            formatSec : true
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
        return (
            <div className="container Timer">
                <Time time = { (this.state.formatHourMinSec) ? this.takeFormatHMS(seconds) :
                    (this.state.formatMinSec) ? this.takeFormatMS(seconds) :
                        (this.state.formatSec) ? this.takeFormatTS(seconds) : "Choose time format"}
                />
                <div className="col-md-3 col-md-offset-1 m-25">
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.switchOnHourMinSec()}>Hours : minutes : seconds</button>
                    </div>
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.switchOnMinSec()}>Minutes : seconds</button>
                    </div>
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.switchOnSec()}>Seconds</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row text-center m-25">
                        <div className="col-md-6">
                            {this.state.isStarted ?
                                    <button onClick={()=> this.startTimer()} className="Timer-button">start</button> :
                                    <button onClick={()=> this.stopTimer()} className="Timer-button">stop</button>
                            }
                        </div>
                        <div className="col-md-6">
                            <button onClick={() => this.resetTimer()} className='Timer-button'>Reset</button>
                        </div>

                    </div>
                    <div className='row'>
                        <div className=' text-center'>
                            <ul className="list-inline">
                                <li>
                                    <button className="Timer-btns" onClick={() => this.addOneMin()}> + 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.subOneMin()}> - 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.addOneSec()}> + 1 second </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.subOneSec()}> - 1 second </button>
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