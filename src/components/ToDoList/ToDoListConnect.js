import { connect } from "react-redux";
import ToDoList from "./ToDoList";

import { completeToDo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    toDos: state.toDo.toDos
  };
};

const mapDispatchToProps = {
  completeToDo
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);