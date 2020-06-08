import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    handleClick= () => {
        alert(`Come in ${this.state.name} , you're ${this.state.age} - that's good enough`)
    }

    updateName = (event) => {
        this.setState({
          name: event.target.value
        })
      }

      updateAge = (event) => {
        this.setState({
          age: event.target.value
        })
      }

    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.updateName}/>
                <input id="age-input" value={this.state.age} onChange={this.updateAge}/>
                <button onClick={this.handleClick}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;