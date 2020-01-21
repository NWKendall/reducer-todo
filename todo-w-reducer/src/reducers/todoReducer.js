
export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

export const todoReducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return {
      }
    case "TOGGLE_TODO":
      return {
        
      }
    case "CLEAR_TODO":
      return {
      }
    default:
      return state
  }
}