import React, { Component } from "react";
import Time from "../Time/Time";
import "./Timer.css"


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seconds : 7300,
            isToHMS : false,
            isToMs : false,
            isToS : false
        };
        this.formatToMS = this.formatToMS.bind(this);
        this.formatToHMS = this.formatToHMS.bind(this);
        this.formatToS = this.formatToS.bind(this);
    }
    formatToHMS(seconds) {
        return Math.floor(seconds / 3600 % 24) + " : " + Math.floor(seconds / 60 % 60) + ":" +  Math.ceil(seconds % 60);
    }
    toHMS() {
        this.setState({
            isToHMS : (this.state.isToHMS = true),
            isToMS : (this.state.isToMs = false),
            isToS : (this.state.isToS = false)
        })
    }
    formatToMS(seconds) {
      return Math.floor(seconds / 60) + ":" +  Math.ceil(seconds % 60);
    }
    toMS() {
        this.setState({
            isToHMS : (this.state.isToHMS = false),
            isToMS : (this.state.isToMs = true),
            isToS : (this.state.isToS = false)
        })
    }
    formatToS(seconds) {
        return Math.floor(seconds)
    }
    toS() {
        this.setState({
            isToHMS : (this.state.isToHMS = false),
            isToMS : (this.state.isToMs = false),
            isToS : (this.state.isToS = true)
        })
    }
    tick () {
        if (this.state.seconds > 0) {
            this.setState({seconds: (this.state.seconds - 1)})
        }
    }
    startTimer () {
        this.timer = setInterval( () => this.tick(), 1000)
    }
    stopTimer () {
        clearInterval( this.timer)
    }
    addOneSec() {
        this.setState({
            seconds: (this.state.seconds + 1)
        })
    }
    minusOneSec() {
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
    minusOneMin() {
        if ( Math.floor(Math.floor(this.state.seconds) > 0) ){
            this.setState({
                seconds : (this.state.seconds - 60)
            })
        }
    }

    render() {
        let seconds = this.state.seconds;
        return (
            <div className="container Timer">
                <Time time = { (this.state.isToHMS) ? this.formatToHMS(seconds) :
                    (this.state.isToMs) ? this.formatToMS(seconds) :
                        (this.state.isToS) ? this.formatToS(seconds) : "Choose time format" }
                />
                <div className="col-md-3 col-md-offset-1 m-25">
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.toHMS()}>Hours : minutes : seconds</button>
                    </div>
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.toMS()}>Minutes : seconds</button>
                    </div>
                    <div className="row">
                        <button className="Timer-toggle-btn" onClick={() => this.toS()}>Seconds</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row text-center m-25">
                        <button onClick={() => this.startTimer()} className="Timer-button">start</button>
                        <button onClick={() => this.stopTimer()} className="Timer-button">stop</button>
                    </div>
                    <div className='row'>
                        <div className=' text-center'>
                            <ul className="list-inline">
                                <li>
                                    <button className="Timer-btns" onClick={() => this.addOneMin()}> + 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.minusOneMin()}> - 1 minute </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.addOneSec()}> + 1 second </button>
                                </li>
                                <li>
                                    <button className="Timer-btns" onClick={() => this.minusOneSec()}> - 1 second </button>
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