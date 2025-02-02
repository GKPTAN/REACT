import React, { useEffect, useState } from "react";

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if(!response.ok) {
        throw new Error("Falha ao buscar dados");
      };

      const data = await response.json();
      setUser(data);
      } catch (error) {
        console.log("Error: ", error);
        setUser(null);
      };

      fetchUser();

      return () => {
        console.log("Componente userData desmontado!");
      };
    };
    // A falta de uma função de limpeza pode levar a efeitos indesejados em caso de desmontagem precoce
  }, [userId]); // Falta considerar o manejo de erros diretamente dentro do efeito

  if (!user) {
    return <p>Carregando dados do usuário...</p>;
  }

  return (
    <div>
      <h1>Dados do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserData;
