import  React, { Component } from 'react';

class MultiController extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            age: 18,
        }
    }

    handleChange(name, e){
        const { value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render(){
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
                <input value={this.state.age} onChange={this.handleChange.bind(this, 'age')} />
            </div>
        )
    }
}

export default MultiController;