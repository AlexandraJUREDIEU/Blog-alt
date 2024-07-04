import ArticleForm from "../../components/Article/ArticleForm";
import { Article } from "../../services/Interface/Article";


interface Add_articleProp {
  handleSubmitArticle: (article: Article) => void;
}
export default function Add_article({handleSubmitArticle}:Add_articleProp) {
  
    
    return (
      <>
        <h1>Page Article</h1>
        <ArticleForm handleSubmitArticle={handleSubmitArticle}/>
      </>
    )
  }
  