 import './NavBar.css';

 const NavBar = () => {
     return (
        <header>
            <nav className="navBar">
                <ul>
                    <li><a href=".">Inicio</a></li>
                    <li><a href=".">Catálogo</a></li>
                    <li><a href=".">Carrito</a></li>
                </ul>
            </nav> 
        </header>
     );
 };
export default NavBar;