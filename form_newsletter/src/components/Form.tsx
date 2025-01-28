import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validate";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(null);
    const data: User = {
      name,
      email,
      agree,
    };
    const validateErrors = validate(data);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    };

    alert("Obrigado por se inscrever");
    setName("");
    setEmail("");
    setAgree(false);
  };

  return (
    <form className="flex flex-col gap-3 py-[2rem]" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm">
          Nome
        </label>
        <input
          type="text"
          name="names"
          id="name"
          placeholder="Digite o seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400 bg-white"
        />
        {errors?.name && (
            <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          E-mail
        </label>
        <input
          type="email"
          name="emails"
          id="email"
          placeholder="Digite o seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg px-2 py-2 text-sm placeholder:text-sm placeholder:text-stone-400 bg-white"
        />
        {errors?.email && (
            <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2 hover:text-blue-700">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            name="agreements"
            id="agreement"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agreement" className="text-sm">
            Concordo com os termos
          </label>
        </div>
        {errors?.agree && (
            <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg cursor-pointer duration-300 text-white"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
