import { Link, NavLink } from "react-router-dom";
import "./assets/Header.css"

export default function Header(props){

    return (
        <div className="head-container" >
            <h2>{props.title}</h2>
            <nav className="navlink">
                <Link to="/"> <span >{props.home}</span></Link>
                <Link to="/about">  <span >{props.about}</span></Link>
                <Link to="/contact">  <span >{props.contact}</span></Link>
            </nav>
            <div className="navlink">
                <Link to="/signin"><button className="navlinkbtn" type="button">{props.signin}</button></Link>
                <Link to="/signup"><button className="navlinkbtn" type="button">{props.signup}</button></Link>
            </div>
        </div>
    )
}

