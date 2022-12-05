import "../styles/index.css";
import "../App.css";
export default function NavBar() {    
    return (
      <nav>
        <ul className="liens">
          <li><a href="Accueil">Accueil</a></li>
          <li><a href="/">|</a></li>          
          <li><a href="/about">A propos</a></li>
        </ul>
      </nav>
    );
}