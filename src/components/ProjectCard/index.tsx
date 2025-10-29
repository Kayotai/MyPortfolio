import ProjectCard from "../Projects/index";

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="Lista dos meus projetos">
        <h2 id="projects-title">Meus Projetos</h2>
        <ul>
            <li>
                <ProjectCard
                    id="proj1"
                    title="Nome do Projeto 1"
                    summary="Resumo curto do projeto e tecnologias usadas."
                    href="https://exemplo.com"
                    external
                />
            </li>
        </ul>
    </section>
  );
}
