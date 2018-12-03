import React, { Component } from 'react'
// import Task from "./Task";
import Task from "./Task";

class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[]
        };

        this.deleteToList = this.deleteToList.bind(this);
    }

    changeUserInput=(e)=>{
        this.setState({
            userInput: e.target.value
        })
    };

    addToList=()=>{
        let task = {
            // id: Date.now(),
            text: this.state.userInput,
            isDone: false
        };
        let listArray = this.state.list;
        listArray.push(task);

        this.setState({
            list: listArray,
            userInput:''
        })
    };

    deleteToList=(id)=>{
        let listArray = this.state.list;
        listArray.splice(id, 1);
        this.setState({
            list: listArray,
            userInput:''
        })
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.changeUserInput}
                    value={this.state.userInput}
                    type="text"
                />
                <button onClick={this.addToList}>Add Task</button>
                <Task
                    list={this.state.list}
                    deleteToList={this.deleteToList}
                />
               {this.state.list.length === 0 ? <h4>No tasks</h4> : <h4>Count of tasks {this.state.list.length}</h4>}
            </div>
        )
    }
}

export default InputForm;