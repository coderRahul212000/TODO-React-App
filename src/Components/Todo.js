import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks:[{task: "Check mails", id:1}, {task: "Read article", id:2}, {task: "Complete HW", id:3}],
            currTask: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length+1}],
            currTask:""
        })
    }

    handleDelete = (id) => {
        let narr = this.state.tasks.filter((taskObj) => {
            return id !== taskObj.id;
        })

        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    return (
        <div>
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
                {this.state.tasks.map((taskObj) => (
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=> this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
  }
}
