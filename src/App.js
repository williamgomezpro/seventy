import React from 'react';
import './App.css';
import NavBar from './components/Header/Navbar';
import ItemListContainer from './components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = 'Hola, aquí irá un listado de productos' />
    </div>
  );
}

export default App;