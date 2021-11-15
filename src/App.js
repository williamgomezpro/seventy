import React from "react";
import "./App.css";

// se importa la libreria de iconos Font Awesome
import "./fontawesome";

// se importa react router DOM
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// se importan componentes
import NavBar from "./components/Header/Navbar";

// se importa el contexto del carrito de compras
import { CartProvider } from "./Contexts/CartContext";

// se importan las vistas
import Inicio from "./views/Inicio/Inicio";
import Catalogo from "./views/Catalogo/Catalogo";
import Detalle from "./views/Detalle/Detalle";
import Carrito from "./views/Carrito/Carrito";
import Checkout from "./views/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/catalogo/:id" component={Catalogo} />
            <Route path="/detalle/:id" component={Detalle} />
            <Route path="/carrito" component={Carrito} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
