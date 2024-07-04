import { Fields } from "../../services/Interface/Fields"



interface FormProp {
    fields:Fields[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  }
export default function Form({ fields, handleSubmit, handleChange }:FormProp) {
  

    return (
      <>
        <form onSubmit={(e) => handleSubmit(e)}>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                id={field.name}
                onChange={(evt) => handleChange(evt)}
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                onChange={(evt) => handleChange(evt)}
              />
            )}
          </div>
        ))}
        <input type="submit" value="Envoyer" />
      </form>
  
      </>
    )
  }