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
                <Link to="/" >
                    <div className="menu-text"> ABOUT ME</div>
                </Link>
                <Link to="/projects">
                    <div className="menu-text">PROJECTS</div>
                </Link>
                <Link to="/skills">
                    <div className="menu-text">MY SKILLS</div>
                </Link>
                <Link to="/resume">
                    <div className="menu-text">RESUME</div>
                </Link>
            </nav>
        </header>
    )
  }
  
  export default Header;