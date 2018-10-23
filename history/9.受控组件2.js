import React, {Component} from 'react';
import {render} from 'react-dom';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            result: 0
        }
    }
    handleAChange = (e) => {
        let val = parseInt(e.target.value);
        if (val) {
            this.setState({
                a: val,
                result: val + this.state.b
            })
        }
    };
    handleBChange = (e) => {
        let val = parseInt(e.target.value);
        if (val) {
            this.setState({
                b: val,
                result: val + this.state.a
            })
        }
    };
    render() {
        return (
            <div>
                <input type="text" value={this.state.a} onChange={this.handleAChange}/>+
                <input type="text" value={this.state.b} onChange={this.handleBChange}/>=
                <input type="text" value={this.state.result}/>
            </div>
        )
    }
}

render(<Sum/>, window.app);