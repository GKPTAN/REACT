import { useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState([]);

  async function handleAddUser(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    setUsers((prev) => [...prev, {name, email}]);
  };

  return (
    <div>
        <form action={handleAddUser}>
            <div>
                <input type="text" name="name" placeholder="Digite o seu nome" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Digite o seu e-mail" />
            </div>
            <button type="submit">enviar</button>
        </form>
        <h3>usuários</h3>
        <ul>
        {users.map((user, index) => (
            <li key={index}>{user.name} - {user.email}</li>
        ))}
        </ul>
    </div>
  );
};

export default UserForm;
