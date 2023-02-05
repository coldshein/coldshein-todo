import React from 'react';
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/slices/todoSlice';


const Todo = ({ title, time, id, completed }) => {
    const dispatch = useDispatch();
    return (
        <div className="task-item">
            <div className="check-item">
                <input
                    type="checkbox"
                    id={title}
                    checked={completed}
                    onChange={() => dispatch(toggleTodo(id))}   
                />
                <label htmlFor={title}>{title}</label>
                <span className="checkmark"></span>
            </div>
            <span className="date-time">{time}</span>
            
            <button className="remove" onClick={() => dispatch(removeTodo(id))}>
                <img src="assets/img/remove.svg" alt="" />
            </button>
        </div>
    );
        
}



export default Todo;
