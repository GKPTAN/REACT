import { useOptimistic } from "react";

const FormularioMensagem = ({ messages, sendMessage }) => {
  const [optimisticMessages, addOptimisticMessages] = useOptimistic(
    messages,
    (state, newMessage) => [...state, { text: newMessage, sending: true }]
  );
  async function formAction(formData) {
    addOptimisticMessages(formData.get("message"));
    await sendMessage(formData);
  };

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>{message.text} {message.sending && <small>(Enviando...)</small>}</div>
      ))}
      <form action={formAction}>
        <input
          type="text"
          name="message"
          id="name"
          placeholder="Digite algo..."
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default FormularioMensagem;
