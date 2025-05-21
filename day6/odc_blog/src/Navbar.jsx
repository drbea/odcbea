import "./assets/css/Navbar.css"
function Navbar(props){


    return (
        <nav class="menu">
            <ul >
                <li><a href="#">{props.home}</a></li>
                <li><a href="#">{props.about}</a></li>
                <li><a href="#">{props.contact}</a></li>
            </ul>
        </nav>

    )
}

export default Navbar;