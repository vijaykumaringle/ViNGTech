// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Astroving from "./components/astroving/Astroving";
import HomePortal from "./components/HomePortal";
import VingTech from "./components/vingtech/VingTech";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/astroving">
          <Astroving />
        </Route>
        <Route path="/vingtech">
          <VingTech />
        </Route>
        <Route path="/">
          <HomePortal />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
