// src/components/header/index.tsx
import React, { useEffect, useState } from "react";
import Logo from "../Logo/"; // ajuste o caminho se necessário
import "./index.css";

type LinkItem = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
};

const defaultLinks: LinkItem[] = [
  { href: "#home", label: "Início" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "https://wa.me/5551981622436?text=Olá%20tenho%20interesse%20em%20fazer%20um%20site%20com%20você!", target: "_blank", label: "Quer um Site?", rel: "noopener noreferrer" },
  { href: "#projects", label: "Projetos" },
  { href: "#social", label: "Contato" },
];

type HeaderProps = {
  links?: LinkItem[];
};

export default function Header({ links = defaultLinks }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navId = "primary-navigation";

  // Bloqueia scroll do body quando o menu mobile está aberto (opcional, melhora UX)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  function handleToggle() {
    setOpen((v) => !v);
  }

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    // Se for âncora interna, rolamento suave e fechar menu
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      const target = document.querySelector(href);
      if (target) {
        // offset de 80px para considerar header fixo (ajuste se precisar)
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      // link externo ou página, fecha menu mas deixa o comportamento natural
      setOpen(false);
    }
  }

  return (
    <header className="header">
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Navegação principal">
        <div className="nav-left">
          <Logo />
        </div>

        <button
          className="menu-toggle"
          aria-controls={navId}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={handleToggle}
          type="button"
        >
          {/* ícone simples sem dependência de fontawesome (melhor) */}
          <span className="menu-icon" aria-hidden="true">
            {open ? "✕" : "☰"}
          </span>
        </button>

        <ul id={navId} className={`nav-links ${open ? "active" : ""}`} role="menubar">
          {links.map((link) => (
            <li key={link.href} role="none">
              <a
                role="menuitem"
                className="links"
                href={link.href}
                rel= {link.rel}
                target= {link.target}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
