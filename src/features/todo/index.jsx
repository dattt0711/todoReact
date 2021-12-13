import React, { Component } from 'react';
import TodoList from './component/todoList/index'
import './style.scss';
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
                {
                    id: 4,
                    title: 'dating',
                    status: "new"
                },
                
            ],
            filterStatus: 'All',
            todoInput: '',
            id: 5,
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


    //set state when user change input
    handleTodoInput = (input) =>{
        console.log(input)
        this.setState({todoInput: input})
    }

    // handle when click add button
    handleClickAdd = ()=> {
        //clone current todo list
        const newTodoList = [...this.state.todoList];
        console.log(this)
        //add new todo
        newTodoList.push({
            title: this.state.todoInput,
            id: this.state.id,
            status: "new",
        })
        // update todolist, id and clear input
        this.setState({ 
            id:this.state.id+1,
            todoList: newTodoList,
            todoInput: '',
        })
 
    }
    //handle remove
    handleClickRemove = (index)=> {
        //clone current todo list
        const newTodoList = [...this.state.todoList];
        //remove
        newTodoList.splice(index,1);
        console.log(newTodoList)
        // update todolist, id and clear input
        this.setState({ 
            todoList: newTodoList,
        })
 
    }
    //handle update 
    handleClickUpdate = (index, newTitle) => {
        const newTodoList = [...this.state.todoList];
        //update   
        newTodoList[index] = {
            ...newTodoList[index],
            title: newTitle,
        }
        console.log(newTodoList)
        // set state       
        this.setState({todoList: newTodoList})
    }
    render() {
        const renderedTodoList = this.state.todoList.filter(todo =>
            this.state.filterStatus === 'All'
            || this.state.filterStatus === todo.status)
        return (
            <div className="todo">
            <div className="todo__heading">
                <h3 >Todo list</h3>
                <input onChange={(e)=>this.handleTodoInput(e.target.value)} placeholder="add new todo" value={this.state.todoInput}></input>
                <a className="btn" onClick={()=>this.handleClickAdd()}>Create task</a>
            </div>
            <TodoList className="todo__list" todoList={renderedTodoList} onTodoClick={this.handleTodoClick} onRemoveClick={this.handleClickRemove} onUpdateClick={this.handleClickUpdate}/>
            <div className="todo__btn-show">
                <button className="btn" onClick={()=>this.handleShowAll()}>Show all</button>
                <button className="btn" onClick={()=>this.handleShowCompleted()}>Show Completed</button>
                <button className="btn" onClick={()=>this.handleShowNew()}>Show New</button>
            </div>
            </div>
        );
    }
}

export default TodoFeature;