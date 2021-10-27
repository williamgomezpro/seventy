import React from "react";
import "./App.css";

// se importa la libreria de iconos Font Awesome 
import "./fontawesome";

// se importa react router DOM
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// se importan componentes
import NavBar from "./components/Header/Navbar";

// se importan vistas
import Inicio from "./views/Inicio/Inicio";
import Catalogo from "./views/Catalogo/Catalogo";
import Detalle from "./views/Detalle/Detalle";
import Carrito from "./views/Carrito/Carrito";

function App() {
  return (
    <Router> 
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/catalogo" exact component={Catalogo} />
          <Route path="/detalle/:id" component={Detalle} />
          <Route path="/carrito" component={Carrito} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;