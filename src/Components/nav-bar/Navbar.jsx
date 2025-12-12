import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logos/logo.svg";
import PageHeader from "../page-header/PageHeader";
import Search from "../../assets/Icons/search.svg";
import Signin from "../../assets/Icons/signin.svg";

export default function Navbar() {
  return (
    <nav>
      <PageHeader/>
      <div className="navbar">
        <img src={Logo} width={150} height={40.08} alt="My Course Hub Logo" className="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="Courses">Courses</Link>
          </li>
          <li>
            <Link to="Pages">Pages</Link>
          </li>
          <li>
            <Link to="Blog">Blog</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
            <div className="navbar-icons">
              <img src={Search} width={28} height={28} alt="search"/>
              <img src={Signin} width={28} height={28} alt="sign-in"/>
            <div className="contact-box">
              <Link to ="/contact">Contact</Link>
            </div>
          </div>
      </div>
  
    </nav>
  );
}
