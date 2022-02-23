import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({title: '', done: false});
  const dispatch = useDispatch();
  const updateTodoClickHandler = (todo) => {
    const action = {
      type: 'update-todo',
      todo
    };
    dispatch(action);
  }
  const deleteTodoClickHandler = (todo) => {
    const action = {
      type: 'delete-todo',
      todo
    };
    dispatch(action);
  }
  const createTodoClickHandler = () => {
    const action = {
      type: 'create-todo',
      todo
    };
    dispatch(action);
  }
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      title: doValue
    };
    setTodo(newTodo);
  };

  return(
      <>
        <ul className="list-group">
          <li className="list-group-item">
            <input onChange={todoChangeHandler}
                   value={todo.title}
                   className="form-control"/>
            <button onClick={createTodoClickHandler}
                    className="btn btn-primary">
              Create
            </button>
          </li>
          {
            todos.map(todo =>
                <li className="list-group-item">
                  <h8> Mark As Done?   </h8>
                  <input checked={todo.done}
                         onChange={(event) => updateTodoClickHandler({...todo, done: event.target.checked})}
                         type="checkbox"/>
                  <Link to={{
                    pathname:`/details/${todo._id}`,
                    state: todo,
                  }}>
                    <h8>Title: </h8>{todo.title}</Link>
                  <button onClick={(e) =>  updateTodoClickHandler} className="btn btn-danger float-end">
                    <input type="text"
                           value={todo.title}
                           onChange={e => updateTodoClickHandler(e.target.value)}/>
                    Edit
                  </button>
                  <button onClick={() => deleteTodoClickHandler(todo)} className="btn btn-danger float-end">
                    Delete
                  </button>
                </li>
            )
          }
        </ul>
      </>
  );
};

export default Todos;