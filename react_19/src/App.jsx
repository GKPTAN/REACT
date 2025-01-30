import { ThemeProvider } from './contexts/ThemeContext';
import UserForm from './components/UserForm';
import ParentComponent from './components/ParentComponent';
import BotaoDeTema from './components/BotaoDeTema';
import FormStatus from './components/FormStatus';
import EstadoDoFormulario from './components/EstadoDoFormulario';
//import Posts from './components/PostItems';
import './App.css';
import MensagemApp from './components/MensagemApp';

function App() {

  return (
    <>
      <title>Hora de Codar - Home</title>
      <meta name="description" content="Aprenda programação com Matheus Battisti" />
      <h1>Testando o react 19</h1>
      <h2>1 - actions</h2>
      <UserForm />
      <h2>2 - ref como props</h2>
      <ParentComponent />
      <h2>3 - use() para carregamento de dados</h2>
      {/* <Posts /> não funciona em react puro, somente com next.js e em server components */}
      <h2>4 - use() para aplicar contextos</h2>
      <ThemeProvider>
        <BotaoDeTema />
      </ThemeProvider>
      <h2>5 - useFormStatus para status de envio de um formulário.</h2>
      <FormStatus />
      {/* <h2>6 - useFormState: atualização baseada na resposta do usuário no formulário</h2> */}
      <h2>* Agora o nome dessa função mudou para useActionState</h2>
      <EstadoDoFormulario />
      <h2>7 - Melhorar a resposta do usuário até que a atualização não chegue</h2>
      <MensagemApp />
    </>
  );
};

export default App
