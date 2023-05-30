import {Button, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div className="NavBar">
       <Navbar>
        <Link to="/">Projects</Link>
        <Link to="aboutme">About Me</Link>
       </Navbar>
      </div>
    );
  }
  
  export default NavBar;
  