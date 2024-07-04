

interface ArticleProps {
  title: string;
  description: string;
}

export default function Article ({title, description}:ArticleProps ) {
  

    return (
      <>
        <img src="https://placehold.co/200" alt="" />

        <div className="article-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>  
      </>
    )
  }