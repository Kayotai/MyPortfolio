import './index.css'

import ProjectCard from "../Projects/index";
import { projects } from "../Projects/index";
import Session from '../Session'; 

export default function ProjectsSection() {
  return (
    <Session id="projects" aria-labelledby="projects-title">
      <h2 id="tech-title">Meus Projetos</h2>
      {/* <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <ProjectCard
              id={p.id}
              title={p.title}
              summary={p.summary}
              href={p.href}
              external={p.external}
            />
          </li>
        ))}
      </ul> */}
      <p className='eb'>Em Breve...</p>
    </Session>
  );
}
