import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <Navbar className="bottom">
            <div className="contacts">
            Contact me: 
                <a href="https://www.linkedin.com/in/christy-fury/" target="_" className="icon">
                <span className="contact"> <i className="fa-brands fa-linkedin medium"></i> </span>
                </a>
                <button className = "email" onClick={() => window.location = 'mailto:christy.fury@gmail.com'}> 
                <span className="contact"><i class="fa-regular fa-envelope medium"></i></span>
                </button>
            </div>
            {/* <Link><BsInstagram /></Link> <Link><BsFacebook /></Link> <Link><BsLinkedin/></Link> <Link><BsGithub/></Link>
        <p style={{fontSize: "8px", color: "gray"}}>(These above images would eventually link to professional pages)</p> */}
        
        </Navbar>
    )
}

export default Footer;
