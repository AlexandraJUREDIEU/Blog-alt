import Article from "../../components/Article/Article";
import { Article as ArticleInterface } from "../../services/Interface/Article";


interface BlogProp {
  articles: ArticleInterface[];
}

export default function Blog({articles}:BlogProp) {
    console.log(articles)
 
    return (
      <>
        <h1>Page Blog</h1>
      {
        articles.map((article, index) => (
          <div key={index}>
            <Article title={article.title} description={article.description}/>
          </div>
          
        ))
        
      }
        
      </>
    )
  }