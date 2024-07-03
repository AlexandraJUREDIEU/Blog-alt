import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Add_article from './pages/Add_article/Add_article'
import Navbar from './components/Navbar/Navbar'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}>Accueil</Route>
        <Route path="/blog" element={<Blog/>}>Blog</Route>
        <Route path="/add-article" element={<Add_article/>}>Ajouter un article</Route>
    </Routes>
    
    
    </>
  )
}

export default App
