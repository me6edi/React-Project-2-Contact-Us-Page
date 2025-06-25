import './Navigation.css'; 

function Navigation() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="img/logo.png" alt="logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
