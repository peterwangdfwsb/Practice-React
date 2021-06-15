import { BrowserRouter, Route, Switch } from "react-router-dom";

import Problems from "./components/Problems";
import Login from "./components/Login";
import Details from "./components/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Problems} />
        <Route path="/login" component={Login} />
        <Route path="/:problemId" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
