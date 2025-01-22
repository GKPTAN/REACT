import { useParams, useNavigate } from "react-router-dom";

// 13 - useNavigate permite a navegação entre rotas na parte da lógica;

const ContactDetails = () => {
  const { id } = useParams();

  // 14 - redirect
  const navigate = useNavigate();
  const handleContact = () => {
    window.alert("contato enviado!");
    return navigate("/");
  };

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  );
};

export default ContactDetails;
