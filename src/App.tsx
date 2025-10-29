// import { useState } from 'react'

// Estilos
import './styles/global.css'
import './styles/theme.css'

// Componentes
import Header from './components/Header'
import Session from './components/Session'
import Lists, { type ListItem} from './components/lists'
import ProjectsSection from './components/ProjectCard'

const techs: ListItem[] = [
  { id: "html", label: "HTML5", description: "Semântica, forms, accessibilidade" },
  { id: "css", label: "CSS", description: "Grid, Flexbox e animações" },
  { id: "react", label: "React", description: "Componentes" },
  { id: "js", label: "Javascript", description: "Efeitos especiais" }
];

const socialLinks: ListItem[] = [
  { href: "https://instagram.com/seuusuario", external: true, description: "Instagram" },
  { href: "https://facebook.com/seuusuario", external: true, description: "Facebook" },
  { href: "https://linkedin.com/in/seuusuario", external: true, description: "Linkedin" },
  { href: "https://github.com/seuusuario", external: true, description: "GitHub" }
]








function App() {
 
  return (
    <>
      <Header />
      <main id="main-content">
         <Session id='home' aria-LabelledBy="home-title">
            <h1 id="home-title">Hiago Ribeiro <br /> Desenvolvedor Frontend</h1> 
            <figure>
               <img src="" alt="Hiago Ribeiro — retrato profissional" width="320" height="320" />
               <figcaption>Olá — desenvolvo interfaces acessíveis e performáticas.</figcaption>
            </figure>
         </Session>

         <Session id="tecnologias" aria-labelledby="tech-title">
            <h2 id="tech-title">Tecnologias</h2>
            <Lists ariaLabelledBy="Lista de linguagens e frameworks" items={ techs } />
         </Session>
         
         <Session id="about" aria-labelledby="Sobre Mim">
            <h2 id="about-title">Sobre Mim</h2>
            <p>Breve apresentação: o que você faz, objetivos e contato profissional. Use frases curtas e claras.</p>
         </Session>

        <ProjectsSection  />
      
      </main>

      <footer id="social" aria-labelledby="contact-title">
         <h2 id="contact-title">Contatos e redes</h2>
         <Lists ariaLabelledBy="Lista de Redes Sociais" items={ socialLinks } />
         <p>&copy; <time dateTime="2025-01-01">2025</time> Hiago Ribeiro — Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
