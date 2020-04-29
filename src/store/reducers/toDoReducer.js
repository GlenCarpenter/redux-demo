/**
 * Initial state and reducers for toDoReducer
 * Glen
 */
import { ADD_TODO, COMPLETE_TODO } from "../constants";

const initialState = {
  toDos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, toDos: [...state.toDos, action.payload] };
    case COMPLETE_TODO:
      return { ...state, toDos: action.payload };
    default:
      // If none of the above cases are provided, return current state
      return state;
  }
};
