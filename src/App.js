import Navbar from "./components/Navbar";
import "./components/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          {ROUTES.map((route) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
