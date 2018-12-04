import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
    }

    deleteTask(i) {
        let id = i.currentTarget.parentNode.id;
        this.props.deleteToList(id);
    }

    doneTask(i) {
        let id = i.currentTarget.id;
        this.props.changeDone(id);
    }

    render() {
        return (
            <ul>
                {this.props.list.map((e, i) =>
                    <li key={i} id={i} onClick={this.doneTask} style={{textDecoration: e.isDone ? 'line-through': 'none'}}>
                        {e.text}
                        <button onClick={this.deleteTask}>x</button>
                    </li>)}
            </ul>
        )
    }
}

export default Task;