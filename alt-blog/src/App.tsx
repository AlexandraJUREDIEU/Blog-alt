import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Add_article from './pages/Add_article/Add_article'


function App() {
  

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}>Accueil</Route>
        <Route path="/blog" element={<Blog/>}>Blog</Route>
        <Route path="/add-article" element={<Add_article/>}>Ajouter un article</Route>
    </Routes>
    <h1>Hello World !!</h1>
    
    </>
  )
}

export default App
