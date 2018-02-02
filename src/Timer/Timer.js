import React, { Component } from 'react';
import "./Timer.css";
import "../Buttons/Buttons.css"
import Time from "../Time/Time";
import ButtonStart from "../Start/ButtonStart"
import Buttons from '../Buttons/Buttons'


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            minutes : 59,
            seconds : 59,
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (value,state){
      return  {state : state + value};
    }

    render() {
        return (
            <div className='container Timer'>
                <Time time={this.state.minutes +" : " + this.state.seconds}/>
                <ButtonStart  start={"Start"}/>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <ul className="list-inline">
                            <li>
                                <button className="Buttons-btn" onClick={this.handleClick(1,this.state.minutes)}> + 1 minute </button>
                            </li>
                            <li>
                                <button className="Buttons-btn"> - 1 minute </button>
                            </li>
                            <li>
                                <button className="Buttons-btn"> + 1 second </button>
                            </li>
                            <li>
                                <button className="Buttons-btn"> - 1 second </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Timer