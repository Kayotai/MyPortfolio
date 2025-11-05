import './index.css'

type Image = {
    src: string;
    alt: string;
}

export type ListItem = {
  id?: string;
  img?: Image           
  label?: string;          
  href?: string; 
  description?: string;
  className?: string   
  external?: boolean;     
};

type ListProps = {
  ariaLabelledBy?: string; 
  ariaLabel?: string;      
  className?: string;
  items: ListItem[];
};

export default function Lists({ ariaLabelledBy, ariaLabel, items, className}: ListProps) {

  // se não tiver aria-labelledby, use aria-label 
  const ariaProps = ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : { "aria-label": ariaLabel ?? "Lista" };

  return (
    <ul className= {className} {... ariaProps}>
      {items.map((item) => (
        <li key={item.id} className= {item.className}>
          { item.img ? (
            <img src= {item.img.src} alt= {item.img.alt} />
          ): false} 
          {item.href ? (
            <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {item.label}
            </a>
          ) : (
            <span className= { item.className }>{item.label}</span>
          )}

          <p className="list-description">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
