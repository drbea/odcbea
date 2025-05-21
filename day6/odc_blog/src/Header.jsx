// import "./assets/css/Header.css"

function Header(props){
    const headstyle = {
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25px",
        border: "1px solid #00000050",
        backgroundColor: "#0071bd50",
    };

    const navStyle = {
        display: "flex",
        gap: "20px",
    }
    return (
        <div className="head-container" style={headstyle}>
            <h2>{props.title}</h2>
            <nav style={navStyle}>
                <a href="">{props.home} </a>
                <a href="">{props.blog} </a>
                <a href="">{props.about}</a>
                <a href="">{props.login}</a>
            </nav>
            <button type="button">{props.contact}</button>
        </div>
    )
}


export default Header;