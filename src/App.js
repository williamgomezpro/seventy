import React from "react";
import "./App.css";

// se importa react router DOM
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// se importan los componentes
import NavBar from "./components/Header/Navbar";

// se importan las vistas
import Inicio from "./views/Inicio/Inicio";
import Catalogo from "./views/Catalogo/Catalogo";
import Detalle from "./views/Detalle/Detalle";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/catalogo" exact component={Catalogo} />
          <Route path="/detalle/:id" component={Detalle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;