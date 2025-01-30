import SubmitButton from "./SubmitButton";

const FormStatus = () => {
  const formAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    alert("E-mail recebido:" + formData.get("emails"));
  };

  return (
    <form action={formAction}>
      <input
        type="email"
        name="emails"
        id="email"
        placeholder="Digite o e-mail..."
      />
      <SubmitButton />
    </form>
  );
};

export default FormStatus;
