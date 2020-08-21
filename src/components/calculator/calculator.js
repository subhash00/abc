import React, { Component } from 'react';
import Dialer from '../dialer';
import Display from '../display';

class calculator extends Component {
    constructor() {
        super();
        this.state = {
            result:""
        }
    }
    clickHandler = (text) => {
        switch (text) {
            case "equalTo": {
                this.equalTo();
                break;
            }
            case "clear": {
                this.clear();
                break;
            }
            case "backSpace": {
                this.backSpace();
                break;
            }
            default: {
                this.setState({
                    result: this.state.result + text
                })
            }
        }
    }

    equalTo = () => {
        this.setState({
            result: eval(this.state.result || "") + ""
        })
    }
    clear = () => {
        this.setState({
            result: ""
        })
    }
    backSpace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }
    render() {
        return (
            <div>  
                <Display result={this.state.result} />
                <Dialer clickHandler={this.clickHandler} />
            </div>
        );
    }
}

export default calculator;