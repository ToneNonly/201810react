import React, {Component} from 'react';
import {render} from 'react-dom';

//=>非受控组件
class Sum extends Component {
    handleChange = (e) => {
        let a = parseInt(this.a.value || 0);
        let b = parseInt(this.b.value || 0);
        this.refs.result.value = a + b;
    };

    //=>onChange是经过react封装的，可以直接写在父级上
    render() {
        //=>ref等于一个函数，表示当元素被挂载到页面上之后会立即调用此函数，并传入渲染后的DOM元素，通过this.调用
        //=>ref也可以等于一个字符串，通过this.refs.调用
        return (
            <div onChange={this.handleChange}>
                <input ref={ref => this.a = ref} type="text"/>+
                <input ref={ref => this.b = ref} type="text"/>=
                <input ref="result" type="text"/>
            </div>
        )
    }
}

render(<Sum/>, window.app);