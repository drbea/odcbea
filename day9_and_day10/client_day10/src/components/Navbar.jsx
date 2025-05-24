import { Link } from "react-router-dom"

export default function Navbar(){



    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBlog" aria-controls="navbarBlog" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarBlog">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to="/register"> 
                            <a class="nav-link" href="#">Login</a>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/register"> 
                            <a class="nav-link" href="#">Signin</a>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}