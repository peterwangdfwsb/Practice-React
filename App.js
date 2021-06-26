import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Table from "./components/HomePage";


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={() => <Table />} />
      <Route exact path="/add" component={() => <AddPost/>} />
      <Route exact path="/edit/:id" render={(props) => <EditContact id={props.match.params.id} />} />
    </div>
    </BrowserRouter>
  );
};
export default App;
