import { useState } from "react";
import FormularioMensagem from "./FormularioMensagem";

const MensagemApp = () => {
  const [messages, setMessages] = useState([
    { text: "Oi, sou a primeira mensagem", sending: false, key: 1 },
  ]);

  async function deliverMessage(message) {
    // usando o hook useOptimistic
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // dado final
    return message;
  }

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false },
    ]);
  }

  return <FormularioMensagem messages={messages} sendMessage={sendMessage} />;
};

export default MensagemApp;
