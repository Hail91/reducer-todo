import React from 'react';

const ToDoForm = props => {

  return(
    <div className='todo-list'>
      <h3
       className={`item${props.item.completed ? ' completed' : ''}`}
       onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.id })}>{props.item}</h3>
      <p>Done? {props.completed.toString()}</p>
    </div>
  )
}

export default ToDoForm;