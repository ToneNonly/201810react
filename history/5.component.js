import React from 'react';
import {render} from 'react-dom';

//=>React是由React元素和React组件
//=>1、首字母小写，凡是首字母小写的都会被认为是React元素

/*
 * 组件的两种定义方式，以及他们之间的区别
 * 一、函数方式
 * 1、参数是属性对象 {msg: "hello", id: "hh"}
 * 2、组件的首字母一定是大写字母
 * 3、组件定义完后可以像React元素一样使用
 *
 * 组件的渲染过程
 * 1、封装props对象
 * let str = 'msg="hello" id="5"';
 * let querystring = require('querystring');
 * let obj = querystring.parse(str, ' ', '=');
 * 2、调用组件函数，得到返回的React元素
 * 3、ReactDOM把React元素转成真实的DOM元素并且插入到目标容器内部
 *
 */

let Message = ({msg, id}) => {
    return <h1 id={id}>{msg}</h1>;
};

render(<Message msg="hello" id="hh"/>, window.app);