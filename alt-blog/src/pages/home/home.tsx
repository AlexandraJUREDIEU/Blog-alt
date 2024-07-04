import './Home.css'
import { ChangeEvent, FormEvent, useState } from "react";
import Form from "../../components/Form/Form";
import Article from '../../components/Article/Article';


export default function Home() {


    const [formContact, setFormContact] = useState({
      name: '',
      title: '',
      message: ''
    });
  
    const fields = [
    { name: 'name', label: "Nom", type: 'text' },
    { name: 'title', label: 'Sujet', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea' }
    ];

    const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = evt.target;
      setFormContact({
        ...formContact,
        [name]: value
      });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formContact);
    };

    const article = {
      title : "Qu'est-ce que le Lorem Ipsum?",
      description : "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."
    }





    return (
      <>
        <h1>Page Accueil</h1>
        <section className="contact">
          <article>
            <p>Aucun message actuellement !</p>
          </article>
          <Form fields={fields} handleSubmit={handleSubmit} handleChange={handleChange} />
        </section>
        <section className="last-article">
        <Article title={article.title} description={article.description}/>
        </section>
      </>
    )
  }