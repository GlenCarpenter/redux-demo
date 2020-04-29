import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";
export * from "../constants";

export default combineReducers({
  toDo: toDoReducer
});
