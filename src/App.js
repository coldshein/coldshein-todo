import React, { useRef } from 'react';

import './App.scss';
import Todo from './components/Todo';

import {useDispatch, useSelector} from 'react-redux';
import { addTodo } from './redux/slices/todoSlice';


function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos );
  const refTodo = useRef();
  const [todoValue, setTodoValue] = React.useState('');
  const addNewTodo = () => {
    if(todoValue.length > 0){
      dispatch(addTodo(todoValue));
    }
    setTodoValue('');
    refTodo.current.focus();
  }

  const complete = todos.filter((todo) => todo.completed === true )

  return (
    <div className="App">
      <div class="block-wrapper">
        <div class="main-block">
          <h1 class="block-title">{
            todoValue ? `I need to ${todoValue}` : 'What do you need to do?'
          }</h1>
          <div class="input-block">
            <input 
            ref={refTodo}
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value) }
            type="text" 
            placeholder="Type here..."
             />
            <button class="add" onClick={addNewTodo}>
              <img src="assets/img/add.svg" alt="" />
            </button>
          </div>
        </div>
        <div class="task-list">
          {
            todos ? todos.map((todo, index) => <Todo {...todo} key={todo.id} /> ) : 'Empty'
          }
        </div>
          <div className='bottom-bar'>
            <span>Total tasks: {todos.length}</span>
            <span>Completed tasks: {complete.length}</span>
          </div>
      </div>
      
    </div>
  );
}

export default App;
