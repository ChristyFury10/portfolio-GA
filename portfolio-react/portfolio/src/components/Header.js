import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar} from "react-bootstrap";

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
         <Navbar collapseOnSelect expand="sm" bg="none" variant="dark" className="nav-bar">

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
     </Navbar>

        </header>

    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    )
  }
  
  export default Header;