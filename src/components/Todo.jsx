import React from 'react';
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../redux/slices/todoSlice';
const Todo = ({ title, time, id, completed }) => {
    const dispatch = useDispatch();

    return (
        <div class="task-item">
            <div class="check-item">
                <input
                    type="checkbox"
                    id={title}
                    checked={completed}
                    onChange={() => dispatch(toggleTodo(id))}
                />
                <label for={title}>{title}</label>
                <span class="checkmark"></span>
            </div>
            <span class="date-time">{time}</span>
            <button class="remove" onClick={() => dispatch(removeTodo(id))}>
                <img src="assets/img/remove.svg" alt="" />
            </button>
        </div>
    );
}

export default Todo;