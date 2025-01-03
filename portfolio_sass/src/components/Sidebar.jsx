import SocialNetworks from './SocialNetworks';
import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Guilherme Amorim" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <p>informações de contato</p>
        <a href="" className="btn">Download curriculo</a>
    </aside>
  )
}

export default Sidebar