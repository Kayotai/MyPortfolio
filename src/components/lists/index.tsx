// src/components/Lists.tsx
// import type { ReactNode } from "react";
// import React from "react";

export type ListItem = {
  id?: string;           
  label?: string;          
  href?: string;          
  description?: string;   
  external?: boolean;     
};

type ListProps = {
  ariaLabelledBy?: string; 
  ariaLabel?: string;      
  items: ListItem[];
};

export default function Lists({ ariaLabelledBy, ariaLabel, items}: ListProps) {

  // se não tiver aria-labelledby, use aria-label 
  const ariaProps = ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : { "aria-label": ariaLabel ?? "Lista" };

  return (
    <ul {...ariaProps}>
      {items.map((item) => (
        <li key={item.id}>
          {item.href ? (
            <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              {item.label}
            </a>
          ) : (
            <span>{item.label}</span>
          )}

          {item.description && <p className="list-description">{item.description}</p>}
        </li>
      ))}
    </ul>
  );
}
