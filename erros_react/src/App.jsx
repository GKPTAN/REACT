import { useState, useEffect } from 'react';
import MyComponent from './components/MyComponent';
import AnotherComponent from './components/AnotherComponent';
import UserProfile from './components/UserProfile';
import LoginForm from './components/LoginForm';
import Greeting from './components/Greeting';
import UserBio from './components/UserBio';
import UserData from './components/UserData';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Guilherme",
    bio: "Desenvolvedor de Apps."
  }

  // ERROS DE INICIANTE NO REACT

  // loop infinito no useEffect

  // useEffect(() => {
  //   setCount(count + 1);
  // }); nesse caso, sem um array de dependências, a função useEffect será executado a cada renderização do componente, causando um loop infinito

  //SOLUÇÃO

  useEffect(() => {
    setCount(count + 1);
  }, []); // com um array de dependências vazio, ele só será executado uma vez, caso passe alguma dependência no array, ele só será executado caso ocorra uma mudança na dependência.

  // 3 - Não utilizar o previous state

  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const changeList = (list) => {
    const filteredList = list.filter((n) => n > 2);
    setList(filteredList);
  }; // filtra os números da váriavel list e pega somente os números maiores que 2

  // 3 - SOLUÇÃO

  const newChangeList = () => {
    setList((prev) => prev.filter((n) => n>2));
  }; // versão simplificada da função change list filtra os números da váriavel list e pega somente os números maiores que 2

  return (
    <>
      <div>
        {/* 2- não passar o tipo de dado corretamente em uma prop */}
        <MyComponent age="30" isAvaliable="false"/>
        {/* SOLUÇÃO - dados do tipo number e boolean entre chaves, e do tipo string entre "" */}
        <MyComponent age={30} isAvaliable={false}/> 
        {/* 3 */}
        <button onClick={() => changeList(list)}>mudar Lista</button>
        <button onClick={newChangeList}>mudar Lista</button>
        {/* 4- quando temos uma repetição de elementos (array) e exibimos na tela, o erro é não utilizar o atributo key, o key é importante porque ajuda o REACT a identificar quais itens foram adicionados, removidos ou sofreram alterações. Ele também é necessário para que o REACT execute o processo de re-renderização. */}
        {/* {list.map((n) => (
          <p>Número: {n}</p>
        ))} sem o key */}
        {/* 4 - SOLUÇÃO */}
        {list.map((n) => (
          <p key={n}>Número: {n}</p>
        ))} {/* usar somente uma key que seja única */}
        {/* 5 - Criar componente com o case errado */}
        {/* <anotherComponent /> */}
        {/* 5 - SOLUÇÃO */}
        <AnotherComponent /> {/* usar o Pascal case quando escrever o nome dos componentes, sendo a primeira letra maiúscula em cada palavra */}
        {/* 6 - não modularizar o código */}
        <UserProfile />
        {/* 7 - estrutura de pastas desorganizadas */}
        {/* pastas: pages, hooks, utils, componentes de algum nicho */}
        {/* 8 - falta de hooks personalizados em caso de reutilização */}
        <LoginForm />
        {/* 9 - erros não desestruturados */}
        <Greeting name="joão"/>
        {/* 10 - manipulação ineficiente de valores indefinidos */}
        <UserBio user={user} />
        {/* uso errado do useEffect */}
        <UserData />
      </div>
    </>
  )
}

export default App
