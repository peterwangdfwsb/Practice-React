import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Users from "./components/User";
import Details from "./components/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:login" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
