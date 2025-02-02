import CustomButton from "./CustomButton";

const UserProfile = () => {
  return (
    <div>
        <form action="">
            <input type="text" placeholder="insira seu nome de usuário ou e-mail"/>
            <input type="password" placeholder="insira sua senha" />
            <CustomButton classname={"teste"} style={{backgroundColor: "red"}}>Editar perfil</CustomButton>
        </form>
    </div>
  );
};

export default UserProfile