import React, {Component} from 'react';
import {render} from 'react-dom';

//=>计时器Clock
//=>函数方式声明的组件是静态的，是不能动的
// let Clock = () => {
//     return <h1>{new Date().toLocaleString()}</h1>
// };

/*
 * 组件声明的第二种方式：类
 * 1、类需要继承自Component
 */
class Clock extends Component {
    constructor() {
        super();
        //=>自定义组件的状态对象
        //=>状态可以用来存放组件内部一些变化的值，状态只能由内部初始化，内部改变
        this.state = {
            time: new Date().toLocaleString()
        }
    }
    //=>生命周期函数，组件即将挂载
    componentWillMount() {

    }

    //=>生命周期函数，组件挂载完成
    componentDidMount() {
        //=>每隔1000执行一次，当调用this.setState后状态会更新，会再次调用render方法进行重新渲染，重新渲染的时候只会把改变了的部分渲染，其他未变的部分保持不变
        window.setInterval(() => {
            this.setState({time: new Date().toLocaleString()});
        }, 1000);
    }

    //=>render方法指的是该组件将要如何渲染，一定要返回一个React元素，只能一个
    render() {
        return <h1>{this.state.time}</h1>
    }
}

render(<Clock/>, window.app);