import React, { Component } from 'react';
import TodoList from './component/todoList/index'
class TodoFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: 1,
                    title: 'eat',
                    status: "new"
                },
                {
                    id: 2,
                    title: 'code',
                    status: "new"
                },
                {
                    id: 3,
                    title: 'sleep',
                    status: "completed"
                },
            ],
            filterStatus: 'All'
        }
    }
    // handle change status
    handleTodoClick = (todo, index) => {
        //clone current todo list
        const newTodoList = [...this.state.todoList];
        //toggle status 
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new"
        }
        
        //update todo list
        this.setState({ 
            todoList: newTodoList,

        })
    }

    // handle show all todo 
    handleShowAll = () =>{
        this.setState({filterStatus: 'All'})
    }
    //handle show completed todo
    handleShowCompleted = () =>{
        this.setState({filterStatus: 'completed'})
    }
    //handle show new todo 
    handleShowNew = () =>{
        this.setState({filterStatus: 'new'})
    }
    render() {
        const renderedTodoList = this.state.todoList.filter(todo =>
            this.state.filterStatus === 'All'
            || this.state.filterStatus === todo.status)
        return (
            <>
            <div>
                <h3>To do list</h3>
                <TodoList todoList={renderedTodoList} onTodoClick={this.handleTodoClick}/>
            </div>
            <div>
                <button onClick={()=>this.handleShowAll()}>Show all</button>
                <button onClick={()=>this.handleShowCompleted()}>Show Completed</button>
                <button onClick={()=>this.handleShowNew()}>Show New</button>
            </div>
            </>
        );
    }
}

export default TodoFeature;