import React from 'react';

import {useSelector} from 'react-redux';
import CompletedTodo from '../components/CompletedTodo'

const Completed = () => {

    const todos = useSelector((state) => state.todo.todos);

    const completedTodos = todos.filter((item) => item.completed === true );
    console.log(completedTodos)
    return ( 
        <>
        <div className="completed-wrapper">
            <h1 className="completed-title">Completed tasks:</h1>
            <div className="completed-list">
               {
                completedTodos.map((item) => <CompletedTodo key={item.id} {...item}/> )
               }
            </div>
        </div>
        </>
     );
}
 
export default Completed;