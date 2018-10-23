import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor() {
        super();
        //=>为组件增加一个初始状态，默认值为true
        this.state = {happy: true};
    }
    //=>默认属性对象
    static defaultProps = {
        name: '无名'
    };
    //=>如果定义组件时希望传入组件的属性有类型和是否必填的限制：
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    };
    handleClick = () => {
        //=>状态可以修改
        this.setState({
            happy: !this.state.happy
        });

        //=>属性是只读的，不能修改
        //=>TypeError: Cannot assign to read only property 'name' of object '#<Object>'
        // this.props.name = 'ddd';
    };
    render() {
        let heart = this.state.happy ? '开心' : '难过';
        //=>onClick要用驼峰
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{heart}</p>
                <button onClick={this.handleClick}>变心</button>
            </div>
        )
    }
}

render(<Person name="zz" age={100}/>, window.app);