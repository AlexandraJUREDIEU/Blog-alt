
import { ChangeEvent, FormEvent, useState } from 'react';
import './Article.css';
import { Article } from '../../services/Interface/Article';
import { useNavigate } from 'react-router-dom';


interface ArticleFormProp {
    handleSubmitArticle: (article: Article) => void;
  }

export default function ArticleForm({handleSubmitArticle}:ArticleFormProp) {
    
    const navigate = useNavigate();
    const[form,setForm] = useState<Article>({
        author: '',
        title: '',
        description: '',
        date: new Date() ,
    })


    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        const currentDate = new Date(); // Obtenir la date et l'heure actuelles
        const updatedForm = { ...form, date: currentDate }; // Ajouter la date et l'heure à l'objet form
        console.log(updatedForm);
        handleSubmitArticle(updatedForm);
        navigate('/blog');
        // console.log(form);
        // handleSubmitArticle(form);
        

    }


    function handleChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const {name, value} = evt.target
        setForm ({...form, [name]:value})
        console.log(form)
    }


    return (
      <>
        <form onSubmit={(e) => handleSubmit(e)} >

            <div>
                <label htmlFor="author">Nom de l'auteur</label>
                <input type="text" name="author" id="author" onChange={(evt) => handleChange(evt)} />
            </div>

            <div>
                <label htmlFor="title">Titre</label>
                <input type="text" name="title" id="title" onChange={(evt) => handleChange(evt)} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" onChange={(evt) => handleChange(evt)}></textarea>
            </div>

            <input type="submit" value="Envoyer" />

        </form>
      </>
    )
  }