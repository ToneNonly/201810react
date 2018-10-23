import React, {Component} from 'react';
import jsonp from 'jsonp';

/**
 * 1、给input绑定值改变事件，当值发生改变的时候调用相应的监听函数
 * 2、获取到input框中的值，然后调用百度的接口获取数据并修改状态对象中的words属性
 * http://www.baidu.com/su?wd=a&cb=cb
 */

export default class Suggest extends Component {
    constructor() {
        super();
        this.state = {
            words: [],
            index: -1 //=>当前选中的索引
        }
    }
    handleChange = (e) => {
        let wd = e.target.value;
        //=>缓存用户输入的关键字
        this.wd = wd;
        jsonp(`http://www.baidu.com/su?wd=${wd}`, {
            param: 'cb'
        }, (err, data) => {
            this.setState({
                words: data.s
            })
        })
    }
    handleKeyDown = (e) => {
        let code = e.keyCode;
        //=>向上或向下箭头
        if (code === 38 || code === 40) {
            let index = this.state.index;
            if (code === 38) {
                index--;
                index = index === -2 ? this.state.words.length - 1 : index;
            } else if (code === 40) {
                index++;
                index = index === this.state.words.length ? -1 : index;
            }
            this.setState({index});
        }  else if (code === 13) {
            window.location.href = `http://www.baidu.com/s?wd=${e.target.value}`;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.index === -1 ? this.wd : this.state.words[this.state.index]}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {this.state.words.map((word, index) => <li key={index} className={"list-group-item " + (index === this.state.index ? "active" : "")}>{word}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}