import React from 'react';

const ToDoForm = props => {

  return(
    <div>
      <h3 onClick={() => props.dispatch({ type: 'TOGGLE_COMPLETE', payload: props.id })}>{props.item}</h3>
      <p>Completed: {props.completed.toString()}</p>
    </div>
  )
}

export default ToDoForm;