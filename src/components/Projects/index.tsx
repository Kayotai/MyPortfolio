// src/components/ProjectCard.tsx
import { useId } from "react";
import type { ReactNode } from "react";


export const projects = [
  {
    id: "proj1",
    title: "Nome do Projeto 1",
    summary: "Resumo curto do projeto e tecnologias usadas.",
    href: "https://exemplo.com",
    external: true,
  },

];


type ProjectCardProps = {
  id?: string;                // opcional, usado como base para o id do título
  title: string;
  summary?: string | ReactNode;
  href?: string;              // se presente, mostra o link "Ver projeto"
  external?: boolean;         // se true, abre em nova aba
  className?: string;
  children?: ReactNode;       // conteúdo extra se precisar
};

export default function ProjectCard({
  id,
  title,
  summary,
  href,
  external = false,
  className,
  children,
}: ProjectCardProps) {
  // useId gera um id estável por componente (React 18+)
  const auto = useId();
  const titleId = id ? `${id}-title` : `project-${auto}-title`;

  return (
    <article aria-labelledby={titleId} className={className}>
      <h3 id={titleId}>{title}</h3>

      {summary && (
        <p className="project-summary">
          {summary}
        </p>
      )}

      {children}

      {href && (
        <p>
          <a
            href={href}
            aria-label={`Ver ${title} (abre em nova aba)`}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Ver projeto
          </a>
        </p>
      )}
    </article>
  );
}
