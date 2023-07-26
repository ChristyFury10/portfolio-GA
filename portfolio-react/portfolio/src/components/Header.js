import { Link } from "react-router-dom";
import "./Header.css"

function Header(props) {
    //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

    return (
        <header>
            <nav style={navStyle}>
                <Link to="/" className="site-link">
                    <div className="menu-text"> ABOUT ME</div>
                </Link>
                <span> --- </span>
                <Link to="/projects" className="site-link">
                    <div className="menu-text">PROJECTS</div>
                </Link>
                <span> --- </span>
                <Link to="/skills" className="site-link">
                    <div className="menu-text">MY SKILLS</div>
                </Link>
                <span> --- </span>
                <Link to="/resume" className="site-link">
                    <div className="menu-text">RESUME</div>
                </Link>
            </nav>
        </header>
    )
  }
  
  export default Header;