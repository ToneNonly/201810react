import React, {Component} from 'react';
import {render} from 'react-dom';

/**
 * 受控组件：受状态控制
 * 非受控组件：
 */

//=>双向数据绑定
class Input extends Component {
    constructor() {
        super();
        this.state = {
            val: ''
        };
    };
    handleChange = (e) => {
        this.setState({
            val: e.target.value
        })
    };
    render() {
        return (
            <div>
                <p>{this.state.val}</p>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
            </div>
        )
    }
}

render(<Input/>, window.app);