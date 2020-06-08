import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

updateFruit = (event) => {
    this.setState({
        fruit: event.target.value
      },function() {
        alert(`The user ${this.state.name} picked : ${this.state.fruit}`)
      })
}


updateName = (event) => {
    this.setState({
        name: event.target.value
      })
}



render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.updateName}/>
            <select id="select-input" value={this.state.fruit} onChange={this.updateFruit}>
            <option value="pineapple">Pineapple</option>
            <option value="lemon">Lemon</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            </select>
        </div>
    );
}
}

export default Exercise2;