import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./redux/reducers/contactReducer";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';


const store = createStore(contactReducer);
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
