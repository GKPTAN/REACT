import { useActionState } from "react";

const EstadoDoFormulario = () => {

    const validarUsuario = (prevState, formData) => {
        const name = formData.get("names").toLowerCase();
        console.log(name);

        if(name === "joão") {
            console.log(name);
            return {
                sucess: true,
                text: "Bem-vindo João",
            };
        } else {
            return {
                sucess: false,
                text: "Erro!, usuário não encontrado",
            };
        };
    };
    const [mensagem, acao] = useActionState(validarUsuario, null);

  return (
    <form action={acao}>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="names" id="name" />
        <button type="submit">Enviar</button>
        {mensagem && <h4>{mensagem.text}</h4>}
    </form>
  );
};

export default EstadoDoFormulario