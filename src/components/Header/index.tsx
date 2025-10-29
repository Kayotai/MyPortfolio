// Header.tsx
import type { ReactNode } from "react";


const defaultLinks: LinkItem[] = [
  { href: "#home", label: "Início" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#social", label: "Contato" },
];

type LinkItem = {
  href: string;
  label: string;
  
};

type HeaderProps = {
  links?: LinkItem[]; // se não passar, usamos um padrão
};

export default function Header({ links = defaultLinks}: HeaderProps) {
  return (
    <header>
      <nav aria-label="Navegação principal">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>  {link.label}  </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
