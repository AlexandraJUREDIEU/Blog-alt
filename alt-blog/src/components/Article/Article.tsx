

interface ArticleProps {
  title: string;
  description: string;
}

export default function Article ({title, description}:ArticleProps ) {
  

    return (
      <>
        <img src="https://placehold.co/200x200" alt="" />

        <div className="article-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>  
      </>
    )
  }