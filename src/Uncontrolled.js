import React, { Component } from 'react';

class Uncontrolled extends Component {
    // constructor(props){
    //     super(props);
    // }

    handleSubmit = (e) => {
        e.preventDefault();

        const { value } = this.refs.name;
        console.log(value);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref="name" type="text" defaultValue="beijing" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Uncontrolled;