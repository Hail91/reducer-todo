import React, { useReducer, useState } from 'react';
import { initialState, reducer} from '../reducers/toDoReducer';
import ToDoForm from './ToDoForm';

const ToDoList = () => {

  const [todoState, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('')

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  return (
    <div>
      <h1 className='title'>TO-DO LIST</h1>
      <div>
        <input 
          type='text'
          name='newNoteText'
          value={newTodo}
          onChange={handleChanges}
          placeholder='add-todo-item'
        />
        <button 
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newTodo})
          }}
        >Add To-do</button>
        <button 
          onClick={() => {
            dispatch({ type: 'CLEAR_COMPLETE'})
          }}
        >Clear List</button>
      </div>
      <div>
          {todoState.map(todo => (
            <ToDoForm
            dispatch={dispatch}
            item={todo.item}
            completed={todo.completed}
            id={todo.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ToDoList;