import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Formkerja from "./pages/Formkerja";
import Formlowongan from "./pages/Formlowongan";
import Home from "./pages/Home";
import Llowongan from "./pages/Llowongan";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Resend from "./pages/Resend";
import Skategori from "./pages/Skategori";
import Verif from "./pages/Verif";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/verif" component={Verif} />
          <Route path="/resend" component={Resend} />
          <Route path="/register" component={Register} />
          <Route path="/skategori" component={Skategori} />
          <Route path="/llowongan" component={Llowongan} />
          <Route path="/profile" component={Profile} />
          <Route path="/formkerja" component={Formkerja} />
          <Route path="/formlowongan" component={Formlowongan} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
