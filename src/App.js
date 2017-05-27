import React, { Component } from 'react';
import Tabs from './Tabs';
import TabPane from './TabPane';
import Select from './Select';
import Arrow from "./Arrow";
import Uncontrolled from "./Uncontrolled";
import MultiController from "./multiController";
import List from "./UpCommunicate";
import List1 from "./noComunicate";
import emitter from './events';



class App extends Component {
    constructor(props){
        super(props);

        this.handelChange = this.handelChange.bind(this);

        this.handelItemChange = this.handleItemChange.bind(this);

        this.state = {
            activeIndex: 0,
        }
    }

    handelChange(e){
        this.setState({
            activeIndex: parseInt(e.target.value, 10),
        });
    }

    handleItemChange(item){
        console.log(item);
    }

    componentDidMount(){
        this.itemChange = emitter.addListener('ItemChange', (msg, data) => {
            console.log(data)
        })
    }

    componentWillUnmount(){
        emitter.removeListener(this.itemChange);
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
                <Tabs activeIndex={this.state.activeIndex} className="tabs-bar">
                    <TabPane order="0" tab={'Tab1'}>第一个Tab中的内容</TabPane>
                    <TabPane order="1" tab={'Tab2'}>第二个Tab中的内容</TabPane>
                    <TabPane order="2" tab={'Tab3'}>第三个Tab中的内容</TabPane>
                </Tabs>
                <Select/>
                <Arrow/>
                <Uncontrolled/>
                <MultiController/>
                <List
                    list={[{text: 1}, {text: 2}]}
                    handleItemChange={this.handleItemChange}
                />
                <List1 list={[{text: 1}, {text: 2}]}/>
            </div>
        );
    }
}

export default App;
