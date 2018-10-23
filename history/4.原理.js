import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>
    <span>hello</span>
</div>, document.querySelector('#root'));

//=>经webpack转义成下列形式
ReactDOM.render(
    React.createElement('div', null, [React.createElement('span', null, ['hello'])], document.querySelector('#root'))
);

//=>React.createElement返回一个对象，格式如下：
// {
//     type: 'div',
//     props: {
//         children: [
//             {
//                 type: 'span',
//                 props: {
//                     children: [
//                         'hello'
//                     ]
//                 }
//             }
//         ]
//     }
// }

//=>ReactDOM.render再把这样一个对象渲染成真实的DOM对象，添加到页面中