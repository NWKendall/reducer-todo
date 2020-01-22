
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
  }]

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      console.log(`add todo`, action.payload)
       
      return [...state, {
        item: action.payload,
        completed: false,
        id: Date.now()
      }]

    case "TOGGLE_TODO": // toggle completed map with ID
    console.log(`toggle todo`, state)  
      const toggler = state.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
            return todo
          } else {
            return todo
          }
      })
      return {state: toggler}
        

    case "CLEAR_TODO": // filter
      return [...state] 
            
    default:
      return state
  }
}