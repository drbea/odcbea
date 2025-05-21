import imgs from "./assets/img/blog.jpg"
import imgs1 from "./assets/img/prediction.png"
import './App.css'
import ArticleCard from './ArticleCard';
import HeadLine from './HeadLine';
import Header from './Header'
import Navbar from "./Navbar";
function App() {
        
  const articleData = {
    subtile: "Blog articles",
    title: "5 principles of ideal SEO team structure",
    detail: "Dans le return on ne peurt pas retourner deux composants dns unne meme fonction exple: return (Header/ Navbar/)==Erreur ,,,, return (div Header/ Navbar/ div)==Bone pratique",
    date: "May, 20, 2025, 5min read",
    img: imgs
}

const articleData1 = {
  subtile: "Blog articles",
  title: "My Growth predictions for 2025",
  detail: "Dans le return on ne peurt pas retourner deux composants dns unne meme fonction exple: return (Header/ Navbar/)==Erreur ,,,, return (div Header/ Navbar/ div)==Bone pratique",
  date: "May, 20, 2025, 5min read",
  img: imgs1
}

  return (
    <div className='container'>
      <Header title="ODC BLOG" home="Home" blog="Blog" about="A propo" login = "Se Connecter" contact = "Contact"/>
      <Navbar home="Acceuil" about = "About us" contact = "Conatctez nous" /> 
      <Navbar home="AcceAutreb Aceuil" about = "blog" contact = "Se connecter" /> 
      <HeadLine />

      <div className="articleCard" >
        <ArticleCard 
            img ={articleData.img} 
            subtile = {articleData.subtile} 
            title ={articleData.title} 
            detail ={articleData.detail} 
            date ={articleData.date} />
        <ArticleCard 
            img ={articleData1.img}
            subtile = {articleData1.subtile}
            title ={articleData1.title}
            detail ={articleData1.detail}
            date ={articleData1.date} />
        <ArticleCard 
            img ={articleData1.img}
            subtile = {articleData1.subtile}
            title ={articleData1.title}
            detail ={articleData1.detail}
            date ={articleData1.date} />
      </div>
    </div>

  )
}

export default App;
