import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'


import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Add_article from './pages/Add_article/Add_article'
import Navbar from './components/Navbar/Navbar'
import {Article} from './services/Interface/Article'



function App() {
  
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSubmitArticle = (article: Article): void =>{
    setArticles([...articles, article])
    console.log(articles)
  }

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}>Accueil</Route>
        <Route path="/blog" element={<Blog articles={articles}/>}>Blog</Route>
        <Route path="/add-article" element={<Add_article handleSubmitArticle={handleSubmitArticle}/>}>Ajouter un article</Route>
    </Routes>
    
    
    </>
  )
}

export default App
