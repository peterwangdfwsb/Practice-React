import { connect } from "react-redux";

import App from "./App";
import { addTag, deleteTag } from "./redux/action-creators";

const mapStateToProps = state => ({
  tags: state
});

const mapDispatchToProps = dispatch => ({
  addTag: (text) => {
    dispatch(addTag(text));
  },
  deleteTag: (id) => {
    dispatch(deleteTag(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);