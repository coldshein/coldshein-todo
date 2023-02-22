import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import CompletedTodo from '../components/CompletedTodo'

const Completed = () => {

    const todos = useSelector((state) => state.todo.todos);

    const completedTodos = todos.filter((item) => item.completed === true );
    return ( 
        <>
        <div className="completed-wrapper">
            <h1 className="completed-title">{
                completedTodos.length > 0 ? 'Completed tasks' : 'There are not completed todos' 
            }</h1>
            <div className="completed-list">
               {
                completedTodos.map((item) => <CompletedTodo key={item.id} {...item}/> )
               }
            </div>
            <Link to="/" className='goback'>Go back</Link>
        </div>
        
        </>
     );
}
 
export default Completed;