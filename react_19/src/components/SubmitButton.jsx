import { useFormStatus } from 'react-dom';

const SubmitButton = () => {

    const {pending} = useFormStatus();

  return (
    <button type='submit' style={pending ? {cursor: 'not-allowed'} : {cursor: 'pointer'}} disabled={pending}>{pending ? "Enviando..." : "Enviar"}</button>
  );
};

export default SubmitButton