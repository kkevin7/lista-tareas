import React, { Component } from 'react';

class TaskForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(e) {
        console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        this.state({
            [name]: value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default TaskForm;