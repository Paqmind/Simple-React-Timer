import React, { Component } from 'react';
import Time from "../Time/Time";
import "./Timer.css"


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seconds : 59,
            minutes : 59
        };

        this.startTimer = this.startTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.addOneSec = this.addOneSec.bind(this);
        this.minusOneSec = this.minusOneSec.bind(this);
        this.addOneMin = this.addOneMin.bind(this);
        this.minusOneMin = this.minusOneMin.bind(this);
    }

    tick () {
        if (this.state.seconds > 0){
            this.setState({seconds: (this.state.seconds - 1)})
        } else if(this.state.seconds === 0) {
            this.setState ({
                seconds: (this.state.seconds = 59),
                minutes:(this.state.minutes - 1)
            });
        }
    }
    startTimer () {
        this.timer = setInterval(this.tick, 1000)
    }
    stopTimer () {
        clearInterval(this.timer)
    }
    addOneSec() {
        if((this.state.seconds === 59)) {
            this.setState({
                minutes : (this.state.minutes + 1),
                seconds : (this.state.seconds = 0)
            })
        } else {
            this.setState ({
                seconds : (this.state.seconds + 1)
            })
        }
    }
    minusOneSec() {
        if (this.state.seconds === 0) {
            this.setState({
                minutes : (this.state.minutes - 1),
                seconds : (this.state.seconds = 59)
            })
        } else {
            this.setState({
                seconds : (this.state.seconds - 1)
            })
        }
    }
    addOneMin() {
        if (this.state.minutes < 59) {
            this.setState({
                minutes : (this.state.minutes + 1)
            })
        }
    }
    minusOneMin(){
        if (this.state.minutes > 0){
            this.setState({
                minutes : (this.state.minutes - 1)
            })
        }
    }

    render() {
        return (
            <div className='container Timer'>
               <Time time={ this.state.minutes + " : " + this.state.seconds} />
                <div className="row text-center m-25">
                    <button onClick={this.startTimer} className="Timer-button">start</button>
                    <button onClick={this.stopTimer} className="Timer-button">stop</button>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <ul className="list-inline">
                            <li>
                                <button className="Timer-btns" onClick={this.addOneMin}> + 1 minute </button>
                            </li>
                            <li>
                                <button className="Timer-btns" onClick={this.minusOneMin}> - 1 minute </button>
                            </li>
                            <li>
                                <button className="Timer-btns" onClick={this.addOneSec}> + 1 second </button>
                            </li>
                            <li>
                                <button className="Timer-btns" onClick={this.minusOneSec}> - 1 second </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Timer;