import { DiCss3, DiHtml5, DiJsBadge, DiReact, DiSass, DiJqueryLogo, DiNodejsSmall, DiMysql, DiPostgresql} from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiVitest, SiTypescript } from "react-icons/si"
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "HTML, sigla para HyperText Markup Language (Linguagem de Marcação de Hipertexto), é a linguagem de marcação padrão utilizada para criar e estruturar páginas da web."},
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "CSS, abreviação de Cascading Style Sheets, é uma linguagem de estilo usada para formatar páginas da web, definindo a aparência visual de elementos HTML."},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "JavaScript (JS) é uma linguagem de programação interpretada, leve, baseada em objetos, e com funções de primeira classe, utilizada para criar páginas da web interativas e dinâmicas."},
    { id: "typescript", name: "TypeScript", icon: <SiTypescript />, text: "TypeScript é uma linguagem de programação que funciona como um superconjunto de JavaScript, adicionando recursos como tipagem estática, interfaces, classes e outros recursos orientados a objetos."},
    { id: "react", name: "React", icon: <DiReact />, text: "React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário em aplicações web."},
    { id: "sass", name: "SASS", icon: <DiSass />, text: "SASS, que significa 'Syntactically Awesome Style Sheets', é uma linguagem de extensão para CSS que oferece recursos adicionais para simplificar e otimizar o processo de criação de folhas de estilo."},
    { id: "jquery", name: "Jquery", icon: <DiJqueryLogo />, text: "jQuery é uma biblioteca JavaScript de código aberto que simplifica a programação JavaScript, especialmente no desenvolvimento web."},
    { id: "node", name: "NodeJS", icon: <DiNodejsSmall />, text: "Node.js é um ambiente de execução (runtime) JavaScript do lado do servidor, de código aberto e multiplataforma, que permite que os desenvolvedores criem aplicações de rede e outras ferramentas utilizando JavaScript no servidor."},
    { id: "tailwind", name: "Tailwind", icon: <RiTailwindCssFill />, text: "O Tailwind CSS é um framework de CSS de código aberto que permite criar estilos para páginas web diretamente no HTML."},
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto, usado para armazenar e gerenciar dados."},
    { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql />, text: "O PostgreSQL é um sistema de gestão de bases de dados relacional e de objeto de código aberto, conhecido pela sua robustez, confiabilidade e flexibilidade."},
    { id: "vitest", name: "Vitest", icon: <SiVitest />, text: "Vitest é um framework de testes unitários, rápido e fácil de usar, para projetos em JavaScript e TypeScript, que se integra perfeitamente com o Vite."},
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer