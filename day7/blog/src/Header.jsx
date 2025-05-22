import { Link, NavLink, useNavigate } from "react-router-dom";
import "./assets/Header.css"

export default function Header(props){
    const last_user = sessionStorage.getItem("last_user")
    const goto = useNavigate

    const user = JSON.parse(last_user)

    const deconnectUser = ()=>{
        sessionStorage.clear()
        alert("Deconnection reussie")
        goto("/")
    }
    return (
        <div className="head-container" >
            <h2>{props.title}</h2>
            <nav className="navlink">
                <Link to="/"> <span >{props.home}</span></Link>
                <Link to="/about">  <span >{props.about}</span></Link>
                <Link to="/contact">  <span >{props.contact}</span></Link>
            </nav>

            <div className="navlink">

                {user ? ( <>@{user.email}
                    <Link ><button onClick={deconnectUser} className="navlinkbtn" type="button">Deconnection</button></Link>
                
                </> ): (
                <>
                    <Link to="/signin"><button className="navlinkbtn" type="button">{props.signin}</button></Link>
                    <Link to="/signup"><button className="navlinkbtn" type="button">{props.signup}</button></Link>                    
                </>
                )

                }

            </div>
        </div>
    )
}

// import { Link, useNavigate } from "react-router-dom";
// import "./assets/Header.css";
// import { useEffect, useState } from "react";

// export default function Header(props) {
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = sessionStorage.getItem("last_user");
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         } else {
//             setUser(null);
//         }
//     }, []);

//     // Pour écouter le changement de sessionStorage à la volée
//     useEffect(() => {
//         const onStorageChange = () => {
//             const storedUser = sessionStorage.getItem("last_user");
//             setUser(storedUser ? JSON.parse(storedUser) : null);
//         };

//         window.addEventListener("storage", onStorageChange);

//         return () => {
//             window.removeEventListener("storage", onStorageChange);
//         };
//     }, []);

//     const deconnectUser = () => {
//         sessionStorage.clear();
//         setUser(null); // Forcer le re-render
//         alert("Déconnexion réussie");
//         navigate("/");
//     };

//     return (
//         <div className="head-container">
//             <h2>{props.title}</h2>
//             <nav className="navlink">
//                 <Link to="/"><span>{props.home}</span></Link>
//                 <Link to="/about"><span>{props.about}</span></Link>
//                 <Link to="/contact"><span>{props.contact}</span></Link>
//             </nav>

//             <div className="navlink">
//                 {user ? (
//                     <>
//                         @{user.email}
//                         <button onClick={deconnectUser} className="navlinkbtn" type="button">Déconnexion</button>
//                     </>
//                 ) : (
//                     <>
//                         <Link to="/signin"><button className="navlinkbtn" type="button">{props.signin}</button></Link>
//                         <Link to="/signup"><button className="navlinkbtn" type="button">{props.signup}</button></Link>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }
