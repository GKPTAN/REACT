import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/eu.png';
import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Guilherme Amorim" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="#" className="btn">Download curriculo</a> 
    </aside>
  );
};

export default Sidebar