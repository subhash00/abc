import React, { Component } from 'react';
import './display.css'

class display extends Component {
    render() {
        const { result } = this.props;
        return (
            <div className="mainDisplay">
                <p className="inputField">{result}</p>
            </div>
        );
    }
}

export default display;