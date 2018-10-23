import React from 'react';

//=>声明了一个React元素
let ele = <h1>hello</h1>;
//=>相当于
//=>1、标签类型 属性对象 子元素
//=>属性名驼峰命名
//=>有些属性是JS关键字，需要换种写法，class=>className  for=>htmlFor
React.createElement('h1', null, ['hello']);

let ele2 = React.createElement('div', {className: 'red'}, ['hello']);
//=>最终的React元素长这样：
// { type: 'div',
//   props: {
//     className: 'red',
//     children: ['hello']
//   }
// }

let eleObj = {
    type: 'div',
    props: {
        className: 'red',
        id: 1,
        children: [
            'hello',
            {
                type: 'span',
                props: {
                    className: 'blue',
                    children: ['word']
                }
            }
        ]
    }
};

//=>自己实现Render方法
function render(eleObj, container) {
    //=>解构出标签的类型和属性对象
    let {type, props} = eleObj;
    //=>创建一个DOM元素
    let ele = document.createElement(type);
    //=>循环属性对象
    for (let attr in props) {
        if (attr === 'children') {
            props[attr].forEach(function (item) {
                if (typeof item === 'string') {
                    let textNode = document.createTextNode(item);
                    ele.appendChild(textNode);
                } else {
                    render(item, ele);
                }
            })
        } else if (attr === 'className') {
            ele.setAttribute('class', props[attr]);
        } else {
            ele.setAttribute(attr, props[attr]);
        }
    }
    container.appendChild(ele);
}

render(eleObj, document.querySelector('#root'));
