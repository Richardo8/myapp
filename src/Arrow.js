import React, { Component } from 'react';

class Arrow extends Component {
    constructor(props){
        super(props);

        this.state = {
            a: 2,
            b: 1,
        }
    }
    a = 1;
    handleClick = (e) => {
        console.log(e);
    }

    render(){
        const { c } = this.state;
        return <button value={c} onClick={this.handleClick}>Test</button>;
    }
}

export default Arrow;