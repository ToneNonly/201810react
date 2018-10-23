import React, {Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/*
 * 1、组件的完整生命周期
 * 2、一些代码的编写的顺序
 */

class Add extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }

    //=>组件将要被挂载
    componentWillMount() {
        console.log('1.componentWillMount');
    }

    handleChange = () => {
        //=>setState方法是异步的，不能在赋值之后立即获取最新的state值，可以在回调函数中获取新的状态值
        this.setState({
            num: this.state.num + 1
        }, () => {
            console.log('setState回调函数');
        })
    };

    //=>组件是否要进行更新，返回boolean
    //=>newProps 新的属性对象
    //=>newState 新的状态对象
    shouldComponentUpdate(newProps, newState) {
        console.log('4.shouldComponentUpdate');
        if (newState.num % 5 === 0) return false;
        return true;
    }

    componentWillUpdate() {
        console.log('5.componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('6.componentDidUpdate');
    }

    render() {
        console.log('2.render');
        return (
            <div style={{border: '1px solid red', padding: '5px'}}>
                <p>{this.state.num}</p>
                <button onClick={this.handleChange}>加</button>
                <SubCounter num={this.state.num}/>
            </div>
        )
    }

    //=>组件挂载完成
    componentDidMount() {
        console.log('3.componentDidMount');
    }
}

//=>子计数器
class SubCounter extends Component {
    //=>组件将要接收新的属性对象
    componentWillReceiveProps(newProps) {
        console.log('SubCounter componentWillReceiveProps');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('SubCounter shouldComponentUpdate');
        if (newProps.num % 3 === 0) return false;
        return true;
    }

    render() {
        console.log('SubCounter Render');
        return (
            <div style={{border: '1px solid blue'}}>
                <p>{this.props.num}</p>
            </div>
        )
    }
}

render(<Add/>, window.app);