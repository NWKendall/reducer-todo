
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }, 
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987585
}]

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
      }
    case "TOGGLE_TODO": // toggle completed
      return {
        ...state,
        completed: !state.completed
      }
    case "CLEAR_TODO": // delete al completed
      return []
    default:
      return state
  }
}