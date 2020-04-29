import { connect } from "react-redux";
import AddToDo from "./AddToDo";

import { addToDo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    toDos: state.toDo.toDos
  };
};

const mapDispatchToProps = {
  addToDo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
