import React from "react";

import Todo from "../components/Todo";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../redux/slices/todoSlice";

const Main = () => {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.todos);
  const refTodo = React.useRef();
  const [todoValue, setTodoValue] = React.useState("");
  const addNewTodo = () => {
    let now = new Date();
    if (todoValue.length > 0) {
      const newTask = {
        id: new Date().toISOString(),
        title: todoValue,
        completed: false,
        time: now.toLocaleTimeString().slice(0, -3),
        datestamp: Date.now(),
      };
      dispatch(
        setTodo({
          ...newTask,
        })
      );
      setTodoValue("");
      refTodo.current.focus();
    }
  };
  todos = todos.slice().sort((a, b) => b.datestamp - a.datestamp);
  const complete = todos.filter((todo) => todo.completed === true);

  return (
    <>
      <div className="main-block">
        <h1 className="block-title">
          {todoValue ? `I need to ${todoValue}` : "What do you need to do?"}
        </h1>
        <div className="input-block">
          <input
            ref={refTodo}
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value)}
            type="text"
            placeholder="Type here..."
          />
          <button className="add" onClick={addNewTodo}>
            <img src="assets/img/add.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="task-list">
        {todos
          ? todos.map((todo, index) => <Todo {...todo} key={todo.id} />)
          : "Empty"}
      </div>
      <div className="bottom-bar">
        <Link to="/completed">Completed tasks: {complete.length}</Link>
        <span>Total tasks: {todos.length}</span>
      </div>
    </>
  );
};

export default Main;
