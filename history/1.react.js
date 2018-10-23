import React from 'react';
import ReactDom from 'react-dom';

let ele = <h1>hello</h1>;

//=>render的含义就是把一个React元素渲染到DOM容器内部
//=>jsx javascript+html（xml一种）的混合语法
//=>ESLint、JSLint代码检查工具
ReactDom.render(
    <h1>hello</h1>,
    //=>上面的写法会编译成：
    // React.createElement('h1', null, ['hello']);
    document.querySelector('#root')
);
//=>React元素是通过JS对象来描述DOM结构的一种数据结构