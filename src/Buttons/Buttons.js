import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <ul className="list-inline">
                        <li>
                            <button className="Buttons-btn"> + 1 minute </button>
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
        )
    }
}

export default Buttons