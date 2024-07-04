
import { ChangeEvent, FormEvent, useState } from 'react';
import './Article.css';
import { Article } from '../../services/Interface/Article';


interface ArticleFormProp {
    handleSubmitArticle: (article: Article) => void;
  }

export default function ArticleForm({handleSubmitArticle}:ArticleFormProp) {

    const[form,setForm] = useState<Article>({
        author: '',
        title: '',
        description: '',
    })


    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log(form);
        handleSubmitArticle(form);
        

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