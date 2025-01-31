import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (formData) => {
        const email = formData.get("emails");
        const senha = formData.get("passwords");

        setUserName(email);
        setPassword(senha);
    };

  return (
    <div className='container'>
        <form action={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className='input-field'>
                <input type="text" name="emails" id="email" placeholder='E-mail' required/>
                <FaUser className='icon' />
            </div>
            <div className='input-field'>
                <input type="password" name="passwords" id="password" placeholder='Senha' required/>
                <FaLock className='icon' />
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox" name="reminders" id="reminder" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  );
};

export default Login