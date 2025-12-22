import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>projects</a>
          </li>
          <li>
            <a>about me</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
