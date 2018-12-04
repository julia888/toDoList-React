import React, {Component} from 'react'
// import Task from "./Task";
import Task from "./Task";

class InputForm extends Component {
    constructor(props) {
        super(props);
        let arr = JSON.parse(localStorage.getItem('arr'));
        this.state = {
            userInput: '',
            list: []
        };

        for (let key in arr){
            this.state.list.push(arr[key])
        }

        this.deleteToList = this.deleteToList.bind(this);
        this.changeDone = this.changeDone.bind(this);
    }

    changeUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    };

    addToList = () => {
        let task = {
            // id: Date.now(),
            text: this.state.userInput,
            isDone: false
        };
        let listArray = this.state.list;
        listArray.push(task);

        localStorage.setItem('arr', JSON.stringify(listArray));

        this.setState({
            list: listArray,
            userInput: ''
        })
    };

    deleteToList = (id) => {
        let listArray = this.state.list;
        listArray.splice(id, 1);
        this.setState({
            list: listArray,
            userInput: ''
        });
        localStorage.setItem('arr', JSON.stringify(listArray));
    };

    changeDone = (id) => {
        let listArray = this.state.list;
        listArray[id].isDone = !listArray[id].isDone;
        this.setState({
            list: listArray,
        });
        localStorage.setItem('arr', JSON.stringify(listArray));
    };

    render() {
        return (
            <div className={'form'}>
                <input
                    onChange={this.changeUserInput}
                    value={this.state.userInput}
                    type="text"
                    className={'form form-input'}
                />
                <button
                    onClick={this.addToList}
                    className={'form-button '}>
                    Add Task
                </button>
                {this.state.list.length === 0 ?
                    <div>No tasks</div> :
                    <Task
                        list={this.state.list}
                        deleteToList={this.deleteToList}
                        changeDone={this.changeDone}
                    />}
                {/*<Task*/}
                {/*list={this.state.list}*/}
                {/*deleteToList={this.deleteToList}*/}
                {/*changeDone={this.changeDone}*/}
                {/*/>*/}
                {/*{this.state.list.length === 0 ? <h4>No tasks</h4> : <h4>Count of tasks {this.state.list.length}</h4>}*/}
            </div>
        )
    }
}

export default InputForm;