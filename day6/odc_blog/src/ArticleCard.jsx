import blog from "./assets/img/blog.jpg"
import "./assets/css/ArticleCard.css"

function ArticleCard(props){

    return (
        <div className="articleContainer" >
            <div className="card-img" >
                <img src={props.img} alt="card img"/>
            </div>
            <div className="card-content">
                <h4>{props.subtile}</h4>
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
            <span>{props.date}</span>
            </div>
        </div>
    )
}

export default ArticleCard;
