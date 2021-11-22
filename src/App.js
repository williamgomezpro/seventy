import React from "react";

// se importa la libreria de iconos Font Awesome
import "./fontawesome";

// se importa react router DOM
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// se importan componentes
import NavBar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

// se importa el contexto del carrito de compras
import {CartProvider} from "./Contexts/CartContext";

// se importan las vistas
import Inicio from "./views/Inicio/Inicio";
import Catalogo from "./views/Catalogo/Catalogo";
import Detalle from "./views/Detalle/Detalle";
import Carrito from "./views/Carrito/Carrito";
import Checkout from "./views/Checkout/Checkout";
import Todos from "./views/Catalogo/Todos";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/catalogo/:id" component={Catalogo} />
          <Route path="/todos" component={Todos} />
          <Route path="/detalle/:id" component={Detalle} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
