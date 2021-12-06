import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


function TodoList({todoList, onTodoClick}) {
    const handleClick = (todo, index)=>{
        if(!onTodoClick) return;
        return onTodoClick(todo, index)
    }
    return (
        <ul className="todo-list">
            {todoList.map((todo,index) => (
                <li
                    onClick={()=>handleClick(todo, index)}
                    className={`${(todo.status=='completed')?"completed":""}`}
                    key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

export default TodoList;