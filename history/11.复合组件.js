import React, {Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//=>复合组件
//=>单项数据流：数据只能从父组件传给子组件
//=>把父组件的状态作为属性传给子组件
class Panel extends Component {
    constructor() {
        super();
        this.state = {
            color: 'orange'
        }
    };
    turn = (color) => {
        switch (color) {
            case 0:
                this.setState({
                    color: 'red'
                })
                break;
            case 1:
                this.setState({
                    color: 'green'
                })
                break;
            default:
                break;
        }
    };
    render() {
        return (
            <div className="panel panel-default">
                <button onClick={() => {this.turn(0)}}>红</button><button onClick={() => {this.turn(1)}}>绿</button>
                <PanelHead head={this.props.head} color={this.state.color}></PanelHead>
                <PanelBody body={this.props.body} color={this.state.color}></PanelBody>
                <PanelFooter footer={this.props.footer} color={this.state.color}></PanelFooter>
            </div>
        )
    }
}

class PanelHead extends Component {
    render() {
        return (
            <div className="panel-heading" style={{color: this.props.color}}>{this.props.head}</div>
        )
    }
}

class PanelBody extends Component {
    render() {
        return (
            <div className="panel-body" style={{color: this.props.color}}>{this.props.body}</div>
        )
    }
}

class PanelFooter extends Component {
    render() {
        return (
            <div className="panel-footer" style={{color: this.props.color}}>{this.props.footer}</div>
        )
    }
}

render(<Panel head="头" body="身" footer="尾"/>, window.app);