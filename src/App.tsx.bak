// estilos/styles
import './styles/global.css'
import './styles/theme.css'
import { Imagens } from './styles/import'

// Components
import Header from './components/Header'           
import Session from './components/Session'
import Lists, { type ListItem } from './components/Lists'
// import ProjectCard from './components/ProjectCard'
import Button from './components/ButtonDownload'


const techs: ListItem[] = [
  {img: {src: Imagens.html, alt: "logo do html"}, id: "html", label: "HTML5", description: "Semântica, Formulários, Acessibilidade e Organização. Sempre me atualizando para dar o melhor possível.", className: "html-card" },
  {img: {src: Imagens.css, alt: "logo do css"}, id: "css", label: "CSS3", description: "Grid, Flexbox, Design, Responsividade e Animações. Não gosto do design mediocre, suporto o simples mas amo o extravagante.", className: "css-card" },
  {img: {src: Imagens.atom, alt: "logo do react"}, id: "react", label: "React", description: "Componentes, Houks, States/estados, Organização e Props. Em combinação com CSS Modules, tudo fica organizado e facíl de se ler.", className: "react-card" },
  {img: {src: Imagens.js, alt: "logo do javascript"}, id: "js", label: "Javascript", description: "Efeitos especiais, Animações, DOM e Validação. Essa é a linguagem que me esforço para dominar dia após dia.", className: "js-card" },
  {img: {src: Imagens.typescript, alt: "logo do typescript"}, id: "Typescript", label: "Typescript", description: "Interface e Segurança do código. Essa é o meu Javascript bombado, ele me ajuda principalmente a evitar erros.", className: "ts-card" },
  {img: {src: Imagens.node, alt: "logo do node js"}, id: "Node", label: "Node", description: "Backend, Criptografia de senhas, Conexão com Banco de Dados. É o que uso para complementar meu frontend.", className: "node-card" },
  {img: {src: Imagens.tw, alt: "logo do tailwind"}, id: "Tailwind", label: "Tailwind", description: "Desenvolvimento rápido com pequenas Classes. Para designs rápidos e projetos curtos.", className: "tw-card" },
  {img: {src: Imagens.database, alt: "logo do mongo db"}, id: "MongoDB", label: "MongoDB", description: "Armazenar e Buscar Dados, conexão com Node para Backend Simples. O banco de dados que uso para complementar o frontend e backend.", className: "db-card" },

];



const socialLinks: ListItem[] = [
  { img: { src: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000", alt: "Logo do Instagram" },id: "insta", label: "Instagram", href: "https://instagram.com/hiago_ribeiro_mvp", external: true, className: "iconSocials" },
  { img: { src: "https://img.icons8.com/?size=100&id=118495&format=png&color=000000", alt:"Facebook" }, id: "fb", label: "Facebook", href: "https://facebook.com/seuusuario", external: true, className: "iconSocials" },
  { img: { src: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000", alt:"Linkedin" }, id: "li", label: "LinkedIn", href: "https://linkedin.com/in/hiago-ribeiro-5938122a2", external: true, className: "iconSocials" },
  { img: { src: "https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff", alt:"Github" }, id: "gh", label: "GitHub", href: "https://github.com/Kayotai", external: true, className: "iconSocials" }
];


function App() {
  return (
    <>
      {/* Skip link */}
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Session id="home" aria-labelledby="home-title">
          <div className="home-container">
            <h1 id="home-title"> Hiago Ribeiro </h1>
            <h2 data-text="Desenvolvedor Frontend" id='home-title-two'> Desenvolvedor Frontend</h2>
            <p id="home-text">
              Eu sou um <strong>Desenvolvedor Web</ strong> que, usando de ferramentas modernas cria o site que você deseja. Sites com a capacidade de ser adaptável para qualquer celular ou tablet, <br />
              e principalmente: <strong>Semântica</ strong> impecável.
            </p>
            <div className="container-button">
              <Button classe='cv btn' href='#' download='#' arialabel='Baixar Currículo em formato de PDF' > Baixar CV </Button>
              <Button classe='zap btn' href='https://wa.me/5551981622436?text=Olá%20tenho%20interesse%20em%20fazer%20um%20site%20com%20você!' arialabel='Link para Whatzapp' target="_blank" rel="noopener noreferrer">Tire suas Dúvidas aqui</Button>
            </div>
          </div>

          <figure>
              <img src= {Imagens.hiago01} alt="Hiago Ribeiro — retrato profissional" width="320" height="320" id='photo-dev' />
          </figure>
        </Session>

        <Session id="tecnologias" aria-labelledby="tech-title">
          <h2 id="tech-title">Minhas Stacks</h2>
          <Lists className="list-tech" ariaLabelledBy="tech-title" items={techs} />
        </Session>

        {/* <div id="projects" aria-labelledby="projects-title">
          <ProjectCard />
        </div> */}
      </main>

      <footer id="social" aria-labelledby="contact-title">
        <h2 id="contact-title">Contatos e Redes</h2>
        <Lists ariaLabelledBy="contact-title" className='social-list' items={socialLinks} />
        <p>&copy; <time dateTime="2025-01-01">2025</time> Hiago Ribeiro — Todos os direitos reservados. Atribuições( <a href="https://icons8.com/icons/">Icon8</a>, <a href="https://www.flaticon.com/free-icons">Flaticon</a> )</p>
      </footer>
    </>
  )
}

export default App
