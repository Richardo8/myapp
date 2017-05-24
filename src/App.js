import React, { Component } from 'react';
import Tabs from './Tabs';
import TabPane from './TabPane';


class App extends Component {
    constructor(props){
        super(props);

        this.handelChange = this.handelChange.bind(this);

        this.state = {
            activeIndex: 0,
        }
    }

    handelChange(e){
        console.log(parseInt(e.target.value, 10));
        this.setState({
            activeIndex: parseInt(e.target.value, 10),
        });
    }


    render() {
        return (
            <div>
                <div className="operator">
                    <span>切换Tab：</span>
                    <select value={this.state.activeIndex} onChange={this.handelChange}>
                        <option value="0">Tab1</option>
                        <option value="1">Tab2</option>
                        <option value="2">Tab3</option>
                    </select>
                </div>
                <Tabs defaultActiveIndex={this.state.activeIndex} className="tabs-bar">
                    <TabPane order="0" tab={'Tab1'}>第一个Tab中的内容</TabPane>
                    <TabPane order="1" tab={'Tab2'}>第二个Tab中的内容</TabPane>
                    <TabPane order="2" tab={'Tab3'}>第三个Tab中的内容</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default App;
