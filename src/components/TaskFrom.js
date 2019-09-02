import React, {Component} from 'react';

class TaskForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
    }

    handleInput(e){
        console.log(e.target.value, e.target.name);
        const {value, name} = e.target;
        this.state({
            [name]: value
        })
        console.log(this.state)
    }

    render(){
        return(
            <div className="card">
                
            </div>
        )
    }
}

export default TaskForm;