// Action creators

import { ADD_TODO, COMPLETE_TODO } from "../constants";

export const addToDo = data => {
  return { type: ADD_TODO, payload: data };
};

export const completeToDo = data => {
  return { type: COMPLETE_TODO, payload: data };
};

// Async variation
/* 
export const completeToDo = data => async dispatch => {
  const response = await data;
  dispatch({ type: COMPLETE_TODO, payload: response });
};
*/