import React, {Component} from 'react'

class Task extends Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(i) {
        let id = i.currentTarget.parentNode.id;
        this.props.deleteToList(id);
    }

    render() {
        return (
            <ul>
                {this.props.list.map((e, i) =>
                    <li key={i} id={i}>
                        {e.text}
                        <button onClick={this.deleteTask}>x</button>
                    </li>)}
            </ul>
        )
    }
}

export default Task;