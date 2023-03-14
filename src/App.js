import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verif from "./pages/Verif";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/verif" component={Verif} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
