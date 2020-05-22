export const initialState = [{
    item: 'Clean Bathroom',
    completed: false,
    id: 1
  },
  {
    item: 'Clean Garage',
    completed: false,
    id: 2
  },
  {
    item: 'Grocery Shopping',
    completed: false,
    id: 3
  }
]
  
  export const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state, 
          {item: action.payload,
          completed: false,
          id: Date.now()}
        ]
  
      case 'TOGGLE_COMPLETE':
        const togglefunc = state.map(todo => {
          if(action.payload === todo.id) {
            return {...todo, completed: !todo.completed}
          } else {
            return todo;
          }
        })
        return togglefunc;
  
      case 'CLEAR_COMPLETE':
        const filteredTodoList = state.filter(todo => todo.completed === false)
        return filteredTodoList;
  
      default: 
        return state;
    }
}